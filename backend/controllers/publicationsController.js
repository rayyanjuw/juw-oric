import Publication from '../models/Publication.js';
import allowedRoles from '../config/roles.js';



// Helper function to check role-based permissions
const canCreatePublicationFor = (creatorRole, targetRole) => {
  return allowedRoles[creatorRole]?.includes(targetRole);
};

// Create a publication
export const createPublication = async (req, res) => {
  try {
    const { user } = req;
    const { role: userRole } = user; // Extract user role
    const { targetRole, ...publicationData } = req.body;

    if (!targetRole) {
      return res.status(400).json({ message: 'Target role is required' });
    }

    if (userRole === 'admin') {
      // Admin can create publications for any role
      const publication = new Publication({ ...publicationData, user: user.id });
      await publication.save();
      return res.status(201).json(publication);
    }

    // Non-admin roles have restricted access
    if (!canCreatePublicationFor(userRole, targetRole)) {
      return res.status(403).json({ message: 'Access denied to create publication for this role' });
    }

    // Proceed with creating the publication
    const publication = new Publication({ ...publicationData, user: user.id });
    await publication.save();
    res.status(201).json(publication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// export const createPublication = async (req, res) => {
//   try {
//     const { user } = req;
//     const { role: userRole } = user;
//     const { targetRole, ...publicationData } = req.body;

//     console.log('User Role:', userRole);
//     console.log('Target Role:', targetRole);
//     console.log('Publication Data:', publicationData);


//     if (!targetRole && userRole !== 'researcher') {
//       return res.status(400).json({ message: 'Target role is required for non-researcher roles' });
//     }

//     if (userRole === 'admin') {
//       // Admin can create publications for any role
//       const publication = new Publication({ ...publicationData, user: user.id });
//       await publication.save();
//       return res.status(201).json(publication);
//     }

//     if (userRole === 'manager') {
//       // Manager can create publications for themselves and supervised roles
//       if (canCreatePublicationFor(userRole, targetRole)) {
//         const publication = new Publication({ ...publicationData, user: user.id });
//         await publication.save();
//         return res.status(201).json(publication);
//       }
//     }

//     if (userRole === 'facultyHead') {
//       // FacultyHead can create publications for themselves, deptHeads, and researchers
//       if (canCreatePublicationFor(userRole, targetRole)) {
//         const publication = new Publication({ ...publicationData, user: user.id });
//         await publication.save();
//         return res.status(201).json(publication);
//       }
//     }

//     if (userRole === 'deptHead') {
//       // DeptHead can create publications for themselves and researchers
//       if (canCreatePublicationFor(userRole, targetRole)) {
//         const publication = new Publication({ ...publicationData, user: user.id });
//         await publication.save();
//         return res.status(201).json(publication);
//       }
//     }

//     if (userRole === 'researcher') {
//       // Researcher can only create publications for themselves
//       if (!targetRole || targetRole === 'researcher') {
//         const publication = new Publication({ ...publicationData, user: user.id });
//         await publication.save();
//         return res.status(201).json(publication);
//       }
//     }

//     return res.status(403).json({ message: 'Access denied to create publication for this role' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


export const getAllPublications = async (req, res) => {
  try {
    const { user } = req;
    const { role: userRole, id: userId } = user;

    let filter = {};

    if (userRole === 'admin') {
      // Admin can see all publications
      filter = {};
    } else if (userRole === 'manager') {
      // Manager can see publications for themselves and their supervised roles
      filter = {
        $or: [
          { user: userId }, // Publications created by the manager
          { supervisedBy: userId } // Publications supervised by the manager
        ]
      };
    } else if (userRole === 'facultyHead') {
      // FacultyHead can see publications for themselves, deptHeads, and researchers
      filter = {
        $or: [
          { user: userId }, // Publications created by the facultyHead
          { supervisedBy: userId }, // Publications supervised by the facultyHead
          { deptHead: userId } // Publications supervised by the facultyHead's deptHeads
        ]
      };
    } else if (userRole === 'deptHead') {
      // DeptHead can see publications for themselves and researchers
      filter = {
        $or: [
          { user: userId }, // Publications created by the deptHead
          { researcher: userId } // Publications supervised by the deptHead's researchers
        ]
      };
    } else if (userRole === 'researcher') {
      // Researcher can only see their own publications
      filter = { user: userId };
    }

    const publications = await Publication.find(filter).populate('user');
    res.json(publications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single publication by ID
// export const getPublicationById = async (req, res) => {
//   try {
//     const publication = await Publication.findById(req.params.id);
//     if (!publication) return res.status(404).json({ message: 'Publication not found' });
//     res.json(publication);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

export const getPublicationById = async (req, res) => {
  try {
    const { user } = req;
    const { role: userRole, id: userId } = user; // Extract user role and id
    const publicationId = req.params.id;

    const publication = await Publication.findById(publicationId).populate('user');
    
    if (!publication) {
      return res.status(404).json({ message: 'Publication not found' });
    }

    const publicationOwner = publication.user._id.toString();

    if (userRole === 'admin') {
      // Admin can view any publication
      return res.json(publication);
    }

    if (userRole === 'manager') {
      // Manager can view their own and supervised publications
      const isAllowed = userId === publicationOwner || (await isSupervised(userId, publicationOwner));
      if (isAllowed) return res.json(publication);
    }

    if (userRole === 'facultyHead') {
      // FacultyHead can view their own, their deptHeads', and their researchers' publications
      const isAllowed = userId === publicationOwner || (await isSupervised(userId, publicationOwner, ['deptHead', 'researcher']));
      if (isAllowed) return res.json(publication);
    }

    if (userRole === 'deptHead') {
      // DeptHead can view their own and their researchers' publications
      const isAllowed = userId === publicationOwner || (await isSupervised(userId, publicationOwner, ['researcher']));
      if (isAllowed) return res.json(publication);
    }

    if (userRole === 'researcher') {
      // Researcher can only view their own publications
      if (userId === publicationOwner) return res.json(publication);
    }

    return res.status(403).json({ message: 'Access denied to view this publication' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get current user's publications
export const getUserPublications = async (req, res) => {
  try {
    const { user } = req; // User object should be attached to the request by authenticate middleware
    const userId = user.id;

    const publications = await Publication.find({ user: userId }).populate('user');
    if (!publications.length) {
      return res.status(404).json({ message: 'No publications found for this user' });
    }

    res.json(publications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Update a publication
export const updatePublication = async (req, res) => {
  try {
    const { user } = req;
    const { role: userRole } = user;
    const publication = await Publication.findById(req.params.id);

    if (!publication) return res.status(404).json({ message: 'Publication not found' });

    if (userRole === 'admin' || publication.user.toString() === user.id) {
      // Admin or owner of the publication can update it
      Object.assign(publication, req.body);
      await publication.save();
      return res.json(publication);
    }

    return res.status(403).json({ message: 'Forbidden' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a publication
export const deletePublication = async (req, res) => {
  try {
    const { user } = req;
    const { role: userRole } = user;
    const publication = await Publication.findById(req.params.id);

    if (!publication) return res.status(404).json({ message: 'Publication not found' });

    if (userRole === 'admin' || publication.user.toString() === user.id) {
      // Admin or owner of the publication can delete it
      await publication.remove();
      return res.json({ message: 'Publication deleted' });
    }

    return res.status(403).json({ message: 'Forbidden' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

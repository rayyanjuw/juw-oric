
// middleware/authorize.js
const authorize = (roles = []) => {
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    console.log('req.user:', req.user); // Debugging log
    const { role } = req.user || {}; // Ensure req.user is defined
    if (!role || (roles.length && !roles.includes(role))) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
};

export default authorize;

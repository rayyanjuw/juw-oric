import express from 'express';
import authenticate  from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';
import {
  createPublication,
  getAllPublications,
  getPublicationById,
  updatePublication,
  deletePublication,
  getUserPublications
} from '../controllers/publicationsController.js';

const router = express.Router();

// Create a publication
router.post('/create', authenticate, authorize(['admin', 'manager', 'facultyHead', 'deptHead', 'researcher']), createPublication);

// Get all publications
router.get('/getAllPublication', authenticate, getAllPublications);

router.get('/mypublications', authenticate, getUserPublications)

// Get a publication by ID
router.get('/publicationbyid/:id', authenticate, getPublicationById);

// Update a publication
router.put('/updatePublication/:id', authenticate, updatePublication);

// Delete a publication
router.delete('/deletePublication/:id', authenticate, deletePublication);

export default router;

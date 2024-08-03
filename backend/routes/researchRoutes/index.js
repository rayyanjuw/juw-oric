import express from 'express'
import {addresearch, removeResearch, getAllResearch} from '../../controllers/researchController/index.js'


const researchRouter = express.Router();



researchRouter.post('/addresearch', addresearch)
researchRouter.post('/removeresearch', removeResearch)
// researchRouter.post('/geta', getAllResearch)




export default researchRouter;

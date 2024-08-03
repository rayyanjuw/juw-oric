import express from 'express';
import ResearchModel from '../models/researchPublications/index.js';

// add research
const addresearch = async (req, res ) => {
    const research = new ResearchModel({
        articletype: req.body.articletype,
        titleofmanuscript: req.body.titleofmanuscript,
        journal: req.body.journal,
        ISSN: req.body.ISSN,
        Volume: req.body.Volume,
        Issue: req.body.Issue,
        Year: req.body.Year,
        DateofPublication: req.body.DateofPublication,
        Pages: req.body.Pages,
        HECcategory: req.body.HECcategoryHECcategory,
        webofScience: req.body.webofScience,
        impactfactor: req.body.impactfactor,
        scopus: req.body.scopus,
        urlofpublication: req.body.urlofpublication
    })

    try {
        await research.save();
        res.json({sucess: true, message: "Research Added Successfully"});
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error While Adding Research"});
    }
}

// remove research
const removeResearch = async (req, res) => {
    try {
        const research = await ResearchModel.findById(req.body.id);

        await ResearchModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Research Removed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error While Removing Research"})   
    }
}


// All Research
const getAllResearch = async (req, res) => {
    try {
        const researches = await ResearchModel.findById({});
        res.json({sucess: true, data: researches})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error While fetching all Researches"})
    }
}


export {addresearch, removeResearch, getAllResearch}




// Applying RBAC to addResearch API
// app.post('/addResearch', verifyToken, authorizeRole(['Admin', 'Manager', 'Faculty Head', 'Department Head', 'Research Individual']), addResearch);

// Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// const researches = async (req, res) => {
//     app.post('/researches', verifyToken, authorizeRole(['Admin', 'Manager', 'Faculty Head', 'Department Head', 'Research Individual']), async (req, res) => {
//         try {
//             const research = new ResearchModel(req.body);
//             await research.save();
//             res.status(201).send(research);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     });
// }
// remove Research

// const removeResearch = async (req,res) => {
//     try {
//         const research = await ResearchModel.findById(req.body.id);

//         await ResearchModel.findByIdAndDelete(req.body.id);
//         res.json({success: true, message: "Research Removed"})
//     } catch (error) {
//         console.log(error)
//         res.json({success: false, message: "Error While Removing Research"})   
//     }
// }


// Create a new research (only accessible by certain roles)
// app.post('/researches', verifyToken, authorizeRole(['Admin', 'Manager', 'Faculty Head', 'Department Head', 'Research Individual']), async (req, res) => {
//     try {
//         const research = new Research(req.body);
//         await research.save();
//         res.status(201).send(research);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Update a research (restricted by role)
// app.put('/researches/:id', verifyToken, authorizeRole(['Admin', 'Manager', 'Faculty Head', 'Department Head', 'Research Individual']), async (req, res) => {
//     try {
//         const research = await Research.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.status(200).send(research);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Get all researches (only accessible by certain roles)
// app.get('/researches', verifyToken, authorizeRole(['Admin', 'Manager', 'Faculty Head', 'Department Head']), async (req, res) => {
//     try {
//         const researches = await Research.find().populate('faculty department researcher');
//         res.status(200).send(researches);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });






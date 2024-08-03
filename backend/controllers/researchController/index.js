import express from 'express';
import ResearchModel from '../../models/researchPublications/index.js';

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
        HECcategory: req.body.HECcategory,
        webofScience: req.body.webofScience,
        impactfactor: req.body.impactfactor,
        scopus: req.body.scopus,
        urlofpublication: req.body.urlofpublication,
        // publishedBy: req.body.publishedBy
    })
    
    try {
        await research.save();
        res.json({success: true, message: "Research Added Successfully"});
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error While Adding Research"});
    }
}

// remove research
const removeResearch = async (req, res) => {
    try {
        // const research = await ResearchModel.findById(req.body.id);

        await ResearchModel.findByIdAndDelete(req.body._id);
        await ResearchModel.destroy()
        res.json({success: true, message: "Research Remove0d Successfully"});
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error While Removing Research"});
    }
}


// All Research
const getAllResearch = async (req, res) => {
    try {
        // const researches = await ResearchModel.findById({});
        const researches = await ResearchModel.findById({user: req.user.id});
        // const researches = await ResearchModel.find({}).populate('published by', 'user role');
        res.json({sucess: true, data: researches})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error While fetching all Researches"})
    }
}



export {addresearch, removeResearch, getAllResearch}


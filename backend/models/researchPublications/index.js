import mongoose from 'mongoose';
const Schema = mongoose.Schema;


// research publication schema
const ResearchSchema = new Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    articletype: {
        type: String,
        required: true
    },

    titleofmanuscript: {
        type: String,
        required: true
    },

    journal: {
        type: String,
        required: true
    },

    ISSN: {
        type: String,
        // match: /^\d{4}-\d{3}[\dxX]$/, // Regular expression to validate ISSN format
        required: true
    },

    Volume: {
        type: String,
        required: true
    },

    Issue: {
        type: String,
        required: true
    },

    Year: {
        type: Date,
        required: true
    },

    DateofPublication: {
        type: Date,
        required: true
    },

    Pages: {
        type: Number,
        required: true
    },

    HECcategory: {
        type: String,
        enum: ['W Category', 'X Category', 'Y Category', 'Z Category'],
        required: true
    },

    webofScience : {
        type: String,
        enum : ['Yes','No'],
        required: true
    },

    impactfactor : {
        type: Number,
        required: true
    },

    scopus: {
        type : String,
        enum : ['Yes','No'],
        required: true
    },

    urlofpublication : {
        type: String, 
        required: false
    },
    // publishedBy: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'users',
    //     required: true
    // }
})



const ResearchModel = mongoose.models.Research ||mongoose.model('research', ResearchSchema)

export default ResearchModel;

import {addresearch, removeResearch, getAllResearch} from '../../controllers/researchController/index.js'
const mongoose = require("mongoose");
const { Schema} = mongoose.Schema;

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    },
    researches: [{
        type: Schema.Types.ObjectId,
        ref: 'Research'
    }]
}, {
    timestamps: true
});


const DepartmentModel = mongoose.models.department || mongoose.model("department", departmentSchema);


module.exports = DepartmentModel;



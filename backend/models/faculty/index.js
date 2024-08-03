const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FacultySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    departments: [{
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }]
}, {
    timestamps: true
});

const FacultyModel = mongoose.models.Faculty || mongoose.model("faculty", FacultySchema); 

export default FacultyModel;

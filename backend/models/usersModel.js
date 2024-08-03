import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'manager', 'faculty head', 'department head', 'research individual'],
        required: true
    },

    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const UsersModel = mongoose.models.users || mongoose.model("users", UsersSchema)


export default UsersModel;

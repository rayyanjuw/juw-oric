const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },

    password: {
        type : String,
        required : true
    },

    role : {
        type : String,
        required : true,
        enum: ['Admin', 'Manager', 'Faculty Head', 'Department Head', 'Research Individual']
    },

    faculty : {
        type: String,
        required: function(){
            return this.role === 'Faculty'
        },
        enum : [
            'Faculty of Science',
            'Faculty of Pharmacy',
            'Faculty of Social Sciences',
            'Faculty of Business Administration, Commerce & Economics',
            'Faculty of Allied Medical Sciences'
        ]
    },

    department: {
        type: String,
        required: function() {
        return this.role === 'Department';
        },
        enum: [
        '',
        'Faculty of Pharmacy',
        '',
        'Department of Chemistry',
        'Department of Computer Science & Software Engineering',
        'Department of Food Science & Technology',
        'Department of Mathematics',
        'Department of Microbiology',
        'Department of Zoology',
        'Department of Pharmaceutical Chemistry',
        'Department of Pharmacology',
        'Department of Pharmacognosy',
        'Department of Pharmacy Practice',
        'Department of Pharmaceutics',
        'Department of English',
        'Department of International Relations',
        'Department of Education and Teachers Education',
        'Department of Islamic Learning',
        'Department of Media Studies',
        'Department of Visual Studies',
        'Department of Psychology',
        'Department of Business Administration',
        'Department of Commerce',
        'Department of Economics'
        ]
    },
    date: {
        type : Date,
        default : Date.now
    }

});

const userModel = mongoose.models.user || mongoose.model('user', UserSchema)
// const Users = mongoose.model('users', UsersSchema);
module.exports = userModel;



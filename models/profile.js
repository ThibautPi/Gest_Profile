const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _id:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        lowercase: true,
        required: true
    },
    address:{
        type: String
    },
    organization:{
        type: String
    }
});

const Profile = mongoose.model('profile', profileSchema);
module.exports = Profile;
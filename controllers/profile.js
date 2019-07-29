const Profile = require('../models/profile');

module.exports ={
    newProfile : async function(req,res,next){
        const newProfile = await new Profile(req.value.body);
        await newProfile.save();
        res.status(201).json(user);
    },
    getProfile: async function(req,res,next){
        const {profileId} = req.value.params;
        const profile = await User.findById(profileId);
        res.status(200).json(profile);
    },

    updateProfile: async function(req,res,next){
        const {profileId} = req.value.params;
        const newProfile = req.value.body;
        const result = await User.findByIdAndUpdate(profileId, newProfile);
        res.status(200).json({success : true});
    }
}
const Profile = require('../models/profile');

module.exports ={
    newProfile : async function(req,res,next){
      const { email } = req.value.body;
      const _id = req.user
      //check if there is user with same e-email
      const foundProfile =await Profile.findOne({"email" : email});
      if(foundProfile){
        return res.status(403).send({error: 'Email is already in use'});
      }
      const newProfile = await new Profile({email, _id});
      await newProfile.save();
      res.status(201).json(newProfile);
    },
    getProfile: async function(req,res,next){
        const id = req.user
        const profile = await Profile.findById(id);
        if(profile == null){
          return res.status(404).send({error: 'profile doesn\'t exist'});
        }
        res.status(200).json(profile);
    },

    updateProfile: async function(req,res,next){

      const newProfile = req.value.body;
      const result = await Profile.findOneAndUpdate({"_id" : req.user}, newProfile);
      if(result == null){
        return res.status(404).send({error: 'profile doesn\'t exist'});
      }
      res.status(201).json(result);
    }
}

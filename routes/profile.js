const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const passportConf = require('../passport');
const pController = require('../controllers/profile');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

const passportJWT = passport.authenticate('jwt',{session:false});

router.route('/')
  .post(passportJWT,validateBody(schemas.profileSchema),pController.newProfile)
  .get(passportJWT,pController.getProfile)
  .put(passportJWT,validateBody(schemas.PutprofileSchema),pController.updateProfile);


module.exports = router;

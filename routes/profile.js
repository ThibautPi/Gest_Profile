const express = require('express');
const router = require('express-promise-router')();

const pController = require('../controllers/profile');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');

router.route('/')
  .post(validateBody(schemas.postSchema),pController.newProfile);

router.route('/:profileId')
  .get(validateParam(schemas.idSchema,'profileId'),pController.getProfile)
  .put(validateParam(schemas.idSchema,'profileId'),validateBody(schemas.profileSchema),pController.updateProfile);


module.exports = router;

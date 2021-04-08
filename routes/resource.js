var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pet_controller = require('../controllers/pet');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Pet ROUTES ///
// POST request for creating a Pet.
router.post('/pet', pet_controller.pet_create_post);
// DELETE request to delete Pet.
router.delete('/pet/:id', pet_controller.pet_delete);
// PUT request to update Pet.
router.put('/pet/:id', pet_controller.pet_update_put);
// GET request for one Pet.
router.get('/pet/:id', pet_controller.pet_detail);
// GET request for list of all pet items.
router.get('/pet', pet_controller.pet_list);
module.exports = router;
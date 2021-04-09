var express = require('express');
const pet_controlers= require('../controllers/pet');
var router = express.Router();
/* GET pet */
router.get('/', pet_controlers.pet_view_all_Page );
router.get('/:id', pet_controlers.pet_detail);
module.exports = router;
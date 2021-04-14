var express = require('express');
const pet_controlers= require('../controllers/pet');
var router = express.Router();
/* GET pet */
router.get('/', pet_controlers.pet_view_all_Page );

//router.get('/:id', pet_controlers.pet_detail);//
module.exports = router;

/* GET detail pet page */
router.get('/detail', pet_controlers.pet_view_one_Page);

/* GET create pet page */
router.get('/create', pet_controlers.pet_create_Page);

/* GET create update page */
router.get('/update', pet_controlers.pet_update_Page);

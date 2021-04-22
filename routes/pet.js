var express = require('express');
const pet_controlers= require('../controllers/pet');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET pet */
router.get('/', pet_controlers.pet_view_all_Page );

//router.get('/:id', pet_controlers.pet_detail);//
module.exports = router;

/* GET detail pet page */
router.get('/detail', pet_controlers.pet_view_one_Page);

/* GET create pet page */
router.get('/create', pet_controlers.pet_create_Page);

/* GET create update page */
router.get('/update',secured, pet_controlers.pet_update_Page);

/* GET create costume page */
router.get('/delete', pet_controlers.pet_delete_Page);


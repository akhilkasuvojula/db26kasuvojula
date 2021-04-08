var pet = require('../models/pet');

// List of all pet
exports.pet_list = async function(req, res) {
    try{
        thepet = await pet.find();
        res.send(thepet);
        }
        catch(err){
            res.error(500, `{"error": ${err}}`);
        }

res.send('NOT IMPLEMENTED: pet list');
};
// for a specific pet.
exports.pet_detail = function(req, res) {
res.send('NOT IMPLEMENTED: pet detail: ' + req.params.id);
};
// Handle pet create on POST.
exports.pet_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: pet create POST');
};
// Handle pet delete form on DELETE.
exports.pet_delete = function(req, res) {
res.send('NOT IMPLEMENTED: pet delete DELETE ' + req.params.id);
};
// Handle pet update form on PUT.
exports.pet_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: pet update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.pet_view_all_Page = async function(req, res) {
    try{
    thepet = await pet.find();
    res.render('pet', { title: 'pet Search Results', results: thepet });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };

    // Handle Costume create on POST.
exports.pet_create_post = async function(req, res) {
    console.log(req.body)
    let document = new pet();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    
    document.name = req.body.name;
    document.age = req.body.age;
    document.gender = req.body.gender;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
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
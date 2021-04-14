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
exports.pet_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await pet.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

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
exports.pet_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await pet.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.age) toUpdate.age = req.body.age;
        if(req.body.gender) toUpdate.gender = req.body.gender;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

    // Handle pet create on POST.
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

    // Handle pet delete form on DELETE.
exports.pet_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await pet.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// Handle a show one view with id specified by query

exports.pet_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await pet.findById( req.query.id)
        res.render('petdetail',
{ title: 'Pet Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a pet.
// No body, no in path parameter, no query.
// Does not need to be async
exports.pet_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('petcreate', { title: 'Pet Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a pet.
// query provides the id
exports.pet_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await pet.findById(req.query.id)
        res.render('petupdate', { title: 'Pet Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



// Handle a delete one view with id from query
exports.pet_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await pet.findById(req.query.id)
        res.render('petdelete', { title: 'Pet Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


//routes for cats
var Cat = require('../models/cat')

//listing all the cats
exports.list = function(req, res){
  //get the list of cats
  var cats = Cat.find({}).sort({age:-1}).exec(function (err, docs) {
    if (err)
      return console.log("error", cats);
    //send it back
    res.render('cats', {cats: docs, title: 'List of Kitties in the DB'});
  });
};

//listing all cats of [color]
exports.colored = function(req, res) {
  //get the list of cats with [color]
  var cats = Cat.find({color:req.params.color}).sort({age:-1}).exec(function (err, docs) {
    if (err)
      return console.log("error", cats);
    //send it back
    res.render('cats', {cats: docs, title: 'List of Kitties in the DB'});
  });
};

exports.createNew = function(req, res) {
  //create the cat
  var kitten = new Cat({ name: req.body.catName, color: req.body.color, age: req.body.age });
  kitten.save(function (err) {
    if (err)
      return console.log("error saving" + kitten.name);
    //redirect to the list of cats
    res.redirect('/cats');
  });
};

//removing the oldest cat
exports.removeOld = function(req, res) {
  Cat.find().sort({age:-1}).limit(1).exec(function(err, kitten) {
    if (err)
      return console.log("error removing" + kitten[0].name, err);
    console.log("Deleting " + kitten[0].name);
    //remove kitten
    Cat.findOne().where('_id',kitten[0]._id).remove();
    res.redirect('/cats');
  });
};
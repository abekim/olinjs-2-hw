var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'localhost');

var catSchema = mongoose.Schema({
  name: String,
  color: String,
  age: Number
});

var Cat = mongoose.model('Cat', catSchema);

//why does this use module.exports instead of exports? 
//http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs
module.exports = Cat;
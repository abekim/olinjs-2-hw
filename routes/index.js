
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Abe Kim\'s Database on Kitty' });
};
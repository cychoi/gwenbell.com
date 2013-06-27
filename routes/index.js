
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Gwen Bell NYC Web Dev' });
};

exports.about = function(req, res){
	res.render('about', { title: 'About Gwen Bell'});
};

exports.bitters = function(req, res){
res.render('bitters', { title: 'Bitters'});
};

exports.git = function(req, res){
res.render('git', { title: 'Git'});
};

exports.responses = function(req, res){
res.render('responses', { title: 'Readers Respond'});
};

exports.presence = function(req, res){
res.render('presence', { title: 'Presence'});
};

exports.writing = function(req, res){
res.render('writing', { title: 'Writing'});
};

exports.best = function(req, res){
res.render('best', { title: 'Best'});
};
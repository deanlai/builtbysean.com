
// GET home page.
 exports.index = function(req, res){
  res.render('index', { title: 'Built by Sean: Portfolio of Sean Lai', path: req.path });
};

// GET /work page
exports.work = function(req, res){
  res.render('work', { title: 'Built by Sean: Portfolio of Sean Lai > Work', path: req.path});
};

// GET /about page
exports.about = function(req, res){
  res.render('about', { title: 'Built by Sean: Portfolio of Sean Lai > About', path: req.path});
};

// GET /contact page
exports.contact = function(req, res){
  res.render('contact', { title: 'Built by Sean: Portfolio of Sean Lai > Contact', path: req.path});
};

// GET /taylorhousechat
exports.taylorhousechat = function(req, res){
    res.render('chat', { title: 'Taylor House Chat', path: req.path});
};
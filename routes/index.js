// MAIN
// GET home page.
 exports.index = function(req, res){
  res.render('index', {
    title: 'Built by Sean: Portfolio of Sean Lai',
    description: 'The Portfolio of Sean Lai, Portland OR. A collection of art/design projects, documentation of places been, and professional work by Sean Lai.',
    path: req.path });
};

// GET /work page
exports.work = function(req, res){
  res.render('work', {
    title: 'Built by Sean: Portfolio of Sean Lai > Work',
    description: 'A selection of works and have-dones of Sean Lai, Portland OR',
    path: req.path});
};

// GET /about page
exports.about = function(req, res){
  res.render('about', {
    title: 'Built by Sean: Portfolio of Sean Lai > About',
    description: 'General information about me, with a portrait thrown in for good measure.',
    path: req.path});
};

// GET /contact page
exports.contact = function(req, res){
  res.render('contact', {
    title: 'Built by Sean: Portfolio of Sean Lai > Contact',
    description: 'Contact information for Sean Lai, Portland OR',
    path: req.path});
};


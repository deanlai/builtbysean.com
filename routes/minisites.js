// GET /minisites home page

exports.index = function(req, res){
    res.render('mini-index', { title: 'Minisites: Web development experiments by Sean Lai', path: req.path});
};
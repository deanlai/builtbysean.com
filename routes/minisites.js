// GET /minisites home page

exports.index = function(req, res){
    res.render('mini-index', {
        title: 'Minisites: Web development experiments by Sean Lai',
        description: 'A collection of miniture websites, for utility, experimentation, and general whimsical WevDev-ness',
        path: req.path});
};

exports.coin = function(req, res){
    res.render('minisites/coin', {
        title: 'Flip a coin!',
        description: 'A simple coin flipping application for decisions of all kinds',
        path: req.path});
};

exports.energy = function(req, res){
    res.render('minisites/energy', {
        title: 'How much energy?',
        description: 'A comparison of some common but often startlingly different energy quantities',
        path: req.path});
};
// GET /minisites home page

exports.index = function(req, res){
    res.render('mini-index', { title: 'Minisites: Web development experiments by Sean Lai', path: req.path});
};

exports.coin = function(req, res){
    res.render('minisites/coin', { title: 'Flip a coin!', path: req.path});
};
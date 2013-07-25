// GET Taylor House home page.
 exports.index = function(req, res){
  res.render('TH-index', { title: 'Taylor House, 2108, SE Portland', path: req.path });
};

// GET /taylorhousechat
exports.chat = function(req, res){
    res.render('chat', { title: 'Taylor House: Chat', path: req.path});
};
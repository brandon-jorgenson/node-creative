var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var cats = [];
for (var i = 0; i < 10; i++) {
  cats.push({
    name: 'Cat' + i,
    catUrl: 'gifs/cat' + i + '.gif',
    numWins: 0
  });
}


router.get('/cat', function(req, res) {
  console.log("In Cat");
  res.send(cats);
});

router.post('/cat', function(req, res) {
    console.log("In Cat Post");
    console.log(req.body);
    cats = req.body;
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var cats = [
  {
    name: 'Cat0',
    catUrl: 'gifs/cat0.gif',
    numWins: 1
  },
  {
    name: 'Cat1',
    catUrl: 'gifs/cat1.gif',
    numWins: 2

  },
  {
    name: 'Cat2',
    catUrl: 'gifs/cat2.gif',
    numWins: 3
  },
  {
    name: 'Cat3',
    catUrl: 'gifs/cat3.gif',
    numWins: 4
  }
];

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

var express = require('express'); //dependencies
var bodyParser = require('body-parser');
var router = express.Router();
var models = require('../models');


// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  models.burger.findAll().then(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  //console.log("burger name: " + req.body.name + "\n");
  models.burger.create({
    burger_name: req.body.name
  }).then(function(){
    res.redirect('/burgers');
  });
});

// put route -> back to index
router.put("/burgers/update/:id", function(req, res) {
  models.burger.update({
    devoured: true
  }, {where: {
    id: req.params.id
  }}
  ).then(function(){
    res.redirect('/burgers');
  })
});

module.exports = router;
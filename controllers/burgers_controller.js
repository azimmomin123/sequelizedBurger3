// Import models connection.
var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/burgers");
});


// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function
      //res.json(dbBurger);
      var hbsObject = { burger: dbBurger };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });

});
//
// router.post("/", function(req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//     req.body.burgerName, 0
//   ], function() {
//     res.redirect("/");
//   });
// });
//
// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//
//   console.log("condition", condition);
//
//   burger.update({
//     devoured: req.body.devour
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

// Export routes for server.js to use.
module.exports = router;

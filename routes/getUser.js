var express = require('express');
var router = express.Router();
var User = require('../models/user');


/*when accessing getUser, take username and password then return _id:
* The /getUser route is defined in server.js
*/
router.get('/', function (req, res) {
  console.log("getting user");
  var data = req.body;
  //setting it to first name last name for now
  //passport should take care of this later for us
  User.findOne(
    {
      username:data.username,
    })//closes findOne
    .exec(
      function (err, user) {
        if(err) {
          console.log(err);
        }
        console.log(JSON.stringify(user.username) + " " + JSON.stringify(user.username) + "'s ID = " + JSON.stringify(user._id));
        res.status(200).send(JSON.stringify(user._id));
    }); //closes exec
}); //closes router.get

module.exports = router;

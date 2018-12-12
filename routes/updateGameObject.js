var express = require('express');
var router = express.Router();
var User = require('../models/user');

//hoping to code this so that when the updateGameObject route is called from the
//GameProvider in React that it takes the userId, returns the user's
//current user object as well as a current circuit object for the user
//if it exists

//so the data will be set in state on the client site by
//this.state.user: res.user,
//this.state.currentCircuit: res.circuit


router.put('/', function (req, res) {
  console.log("getting user");
  console.log("req body " + JSON.stringify(req.body) + " @ " + new Date());
  var data = req.body.userId;
  console.log("searching by " + data);
  //setting it to first name last name for now
  //passport should take care of this later for us
  User.findById(data)
    .then(function (user) {
        // if(err) {
        //   // console.log("cannot find user");
        //   // res.status(404);
        //   console.log("error finding user ", user);
        //   console.log(err);
        // }
        console.log("find user complete" + user);
        res.status(200).send(user);
    }); //closes exec
}); //closes router.get

module.exports = router;

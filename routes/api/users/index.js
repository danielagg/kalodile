var mongoose = require("mongoose");
var router = require("express").Router();
var passport = require("passport");
var User = mongoose.model("User");
var auth = require("../../auth");

router.get("/", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }

      return res.json({ user: user.toAuthJSON() });
    })
    .catch(next);
});

router.put("/", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }

      if (typeof req.body.user.name !== "undefined") {
        user.name = req.body.user.name;
      }

      if (typeof req.body.user.email !== "undefined") {
        user.email = req.body.user.email;
      }

      if (typeof req.body.user.phone !== "undefined") {
        user.phone = req.body.user.phone;
      }

      if (typeof req.body.user.password !== "undefined") {
        user.setPassword(req.body.user.password);
      }

      if (typeof req.body.user.band !== "undefined") {
        user.band = req.body.user.band;
      }

      if (typeof req.body.user.linkForBand1 !== "undefined") {
        user.linkForBand1 = req.body.user.linkForBand1;
      }

      if (typeof req.body.user.linkForBand2 !== "undefined") {
        user.linkForBand2 = req.body.user.linkForBand2;
      }

      if (typeof req.body.user.linkForBand3 !== "undefined") {
        user.linkForBand3 = req.body.user.linkForBand3;
      }

      return user.save().then(function() {
        return res.json({ user: user.toAuthJSON() });
      });
    })
    .catch(next);
});

router.post("/login", function(req, res, next) {
  if (!req.body.email) {
    return res.status(401).json({
      errors: {
        email: "You must provide your email address, in order to login."
      }
    });
  }

  if (!req.body.password) {
    return res.status(422).json({
      errors: {
        password: "You must provide a password, in order to login."
      }
    });
  }

  passport.authenticate("local", { session: false }, function(err, user, info) {
    if (err) {
      return next(err);
    }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post("/register", function(req, res, next) {
  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.description = req.body.description;
  user.band = req.body.band;
  user.linkForBand1 = req.body.linkForBand1;
  user.linkForBand2 = req.body.linkForBand2;
  user.linkForBand3 = req.body.linkForBand3;
  user.setPassword(req.body.password);

  user
    .save()
    .then(function() {
      return res.json({ user: user.toAuthJSON() });
    })
    .catch(next);
});

module.exports = router;

var router = require("express").Router();

router.use("/listings", require("./listings"));
router.use("/users", require("./users"));

router.use(function(err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.status(401).json({
      errors: Object.keys(err.errors).reduce(function(errors, key) {
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;

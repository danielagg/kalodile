const router = require("express").Router();
const auth = require("../../auth");

router.get("/", auth.optional, function(req, res, next) {
  res.json("Hello, World!");
});

module.exports = router;

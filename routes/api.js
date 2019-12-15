var express = require("express");
var router = express.Router();
const { getList } = require("./site.js");

/* GET home page. */

router.get("/getList", function(req, res, next) {
  res.json({ "name": "Виктор" });
});

module.exports = router;

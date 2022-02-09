var express = require("express");
var router = express.Router();

var connection = require("../library/database");

/* GET users listing. */
router.get("/", function (req, res, next) {
  //query
  connection.query("SELECT * FROM users ", function (err, rows) {
    if (err) {
      req.flash("error", err);
      req.render("user", {
        data: "",
      });
    } else {
      //reander ke view post index
      res.render("tabel", {
        data: rows, //    })
      });
    }
  });
});

module.exports = router;

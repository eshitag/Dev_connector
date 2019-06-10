const express = require("express");
const router = express.Router();

//@route GET api/profile
//@desc  TEST route
//acess  public
router.get("/", (req, res) => res.send("profile route"));

module.exports = router;

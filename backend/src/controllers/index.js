const router = require("express").Router();
const cors = require("cors");

const user = require("./User");

router.use(cors());

router.use("/user", user);

module.exports = router;

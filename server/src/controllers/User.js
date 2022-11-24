const router = require("express").Router();
const validationMiddleware = require("../middleware/validation");
const UserValidation = require("../validation/User");
const UserService = require("../services/User");

router.post(
  "/register",
  validationMiddleware(UserValidation.register),
  async (req, res) => {
    console.log(req.headers);
    try {
      const token = await UserService.register(req.body);
      if (token) {
        res.json({ token });
      } else {
        res.status(400).json({
          error: "userDoesExist",
        });
      }
    } catch (e) {
      res.status(500).end();
    }
  }
);

router.post(
  "/login",
  validationMiddleware(UserValidation.login),
  async (req, res) => {
    try {
      const token = await UserService.login(req.body);

      if (token) {
        res.json({ token });
      } else {
        res.status(400).json({
          error: "invalidCredentials",
        });
      }
    } catch (e) {
      res.status(500).end();
    }
  }
);

router.get("/:id", async (req, res) => {});

module.exports = router;

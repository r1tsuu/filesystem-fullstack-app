const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_KEY;

export const user = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) res.sendStatus(403);

    req.user = user;

    next();
  });
};

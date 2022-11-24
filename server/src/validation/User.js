const yup = require("yup");

const register = yup.object({
  email: yup.string().min(3).max(30).required(),
  login: yup.string().min(4).max(16).required(),
  password: yup.string().min(6).max(24).required(),
});

const login = yup.object({
  email: yup.string(),
  login: yup.string(),
  password: yup.string().required(),
});

module.exports = { register, login };

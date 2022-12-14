const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const JWT_SECRET = process.env.JWT_KEY;

const HASH_SALT_ROUNDS = 10;

const createToken = ({ id, email, login, isSuperUser }) => {
  return jwt.sign(
    {
      id,
      email,
      login,
      isSuperUser,
    },
    JWT_SECRET,
    {
      expiresIn: "86400s",
    }
  );
};

const checkForUniqueUser = async ({ login, email }) => {
  const user = await User.findOne({
    where: {
      [Op.or]: [
        {
          login,
        },
        {
          email,
        },
      ],
    },
  });

  return user === null ? true : false;
};

const register = async ({ login, password, email }) => {
  const isUniqueUser = await checkForUniqueUser({ login, email });

  if (isUniqueUser) {
    const hashedPassword = await bcrypt.hash(password, HASH_SALT_ROUNDS);

    const isSuperUser = false;

    const { id } = await User.create({
      email,
      login,
      password: hashedPassword,
      isSuperUser,
    });

    const token = createToken({
      id,
      login,
      email,
      isSuperUser,
    });

    return {
      token,
      id,
      email,
      login,
      isSuperUser,
    };
  }
};

const login = async ({ email, password, login }) => {
  let user;
  if (email) {
    user = await User.findOne({
      where: {
        email,
      },
    });
  } else if (login) {
    user = await User.findOne({
      where: {
        login,
      },
    });
  }

  if (user) {
    const { id, password: hashedPassword, isSuperUser } = user;

    const isCorrectPassword = await bcrypt.compare(password, hashedPassword);

    if (isCorrectPassword) {
      const token = createToken({
        id,
        email,
        login,
        isSuperUser,
      });

      return {
        token,
        id,
        email,
        login,
        isSuperUser,
      };
    }
  }
};

module.exports = {
  register,
  login,
};

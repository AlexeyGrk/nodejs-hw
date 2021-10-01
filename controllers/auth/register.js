const bcrypt = require("bcryptjs");
const { User } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const { Conflict } = require("http-errors");
const { HTTPcode } = require("../../utils/constants");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email already exsit");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const newUser = { email, password: hashPassword };

  await User.create(newUser);
  sendSuccessRes(res, [], HTTPcode.CREATED);
};

module.exports = register;

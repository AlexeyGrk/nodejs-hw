const bcrypt = require("bcryptjs");
const { User } = require("../../models/");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const { HTTPcode } = require("../../utils/constants");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email already exsit");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  var unsecureUrl = gravatar.url(
    email,
    { s: "100", r: "x", d: "retro" },
    false
  );

  const newUser = {
    avatarURL: unsecureUrl,
    email,
    password: hashPassword,
    subscription,
  };

  await User.create(newUser);
  res.status(HTTPcode.CREATED).json({
    status: "success",
    code: HTTPcode.CREATED,
    user: {
      email,
      subscription,
    },
  });
};

module.exports = register;

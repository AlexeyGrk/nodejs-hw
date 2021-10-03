const bcrypt = require("bcryptjs");
const { User } = require("../../models/");
const { NotFound, BadRequest, Unauthorized } = require("http-errors");
const { HTTPcode } = require("../../utils/constants");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, "email password  subscription");

  // if (!user || !bcrypt.compareSync(password, user.password)) {
  //   throw new BadRequest("Invalid email or password");
  // }
  if (!user) {
    throw new Unauthorized(`Email or password  wrong `);
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new BadRequest("Invalid password");
  }
  const token = "tokenya123123";
  res.json({
    status: "succes",
    code: HTTPcode.OK,
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;

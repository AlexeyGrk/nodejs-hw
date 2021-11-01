const bcrypt = require("bcryptjs");
const { User } = require("../../models/");
const { BadRequest, Unauthorized } = require("http-errors");
const { HTTPcode } = require("../../utils/constants");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne(
    { email },
    "_id email password  subscription verify"
  );
  const token = user.createToken();

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new Unauthorized(`Email or password  wrong `);
  }
  if (!user.verify) {
    throw new Unauthorized(`Please, verify your email`);
  }
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: "success",
    code: HTTPcode.OK,
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
      verifyToken: user.verifyToken,
    },
  });
};

module.exports = login;

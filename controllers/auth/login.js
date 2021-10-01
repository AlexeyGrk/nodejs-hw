const bcrypt = require("bcryptjs");
const { User } = require("../../models/");
const { NotFound, BadRequest } = require("http-errors");
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, "email password");
  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw new BadRequest("Invalid email or password");
  }
  //   if (!user) {
  //     throw new NotFound(`Email ${email} not found `);
  //   }
  //   if (!bcrypt.compareSync(password, user.password)) {
  //     throw new BadRequest("Invalid password");
  //   }
  const token = "tokenya123123";
  res.json({
    status: "succes",
    code: 200,
    token,
  });
};

module.exports = login;

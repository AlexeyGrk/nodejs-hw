const bcrypt = require("bcryptjs");
const { User } = require("../../models/");
const gravatar = require("gravatar");

const { Conflict } = require("http-errors");
const { HTTPcode } = require("../../utils/constants");
const { nanoid } = require("nanoid");
const { sendEmail } = require("../../utils");

const register = async (req, res) => {
  const { email, password, subscription } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Email already exsit");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const verifyToken = nanoid();
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
    verifyToken,
  };
  const emailMessage = {
    to: email,
    subject: "Verify email on Phonebook by Alexey Teams",
    html: `
            <a href="http://localhost:3000/api/v1/users/verify/${verifyToken}" target="_blank">Подтвердить почту</a>
            `,
  };

  await User.create(newUser);
  await sendEmail(emailMessage);
  res.status(HTTPcode.CREATED).json({
    status: "success",
    code: HTTPcode.CREATED,
    user: {
      email,
      subscription,
      verifyToken,
    },
  });
};

module.exports = register;

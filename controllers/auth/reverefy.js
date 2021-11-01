const { BadRequest } = require("http-errors");
const { sendEmail } = require("../../utils");
const { User } = require("../../models/");

const verify = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequest("Missing required field email");
  }

  const user = await User.findOne(
    { email },
    "_id email password  subscription verify"
  );

  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const emailMessage = {
    to: email,
    subject: "Verify email on Phonebook by Alexey Teams",
    html: `
            <a href="http://localhost:3000/api/v1/users/verify/${user.verifyToken}" target="_blank">Подтвердить почту</a>
            `,
  };

  await sendEmail(emailMessage);
  res.json({
    status: "success",
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = verify;

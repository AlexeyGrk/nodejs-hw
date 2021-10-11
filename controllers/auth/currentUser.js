const { HTTPcode } = require("../../utils/constants");
const currentUser = async (req, res) => {
  const { email, subscription } = req.user;
  res.status(HTTPcode.OK).json({
    status: "succes",
    code: HTTPcode.OK,
    user: {
      email,
      subscription,
    },
  });
};

module.exports = currentUser;

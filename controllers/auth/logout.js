const { User } = require("../../models/");
const { HTTPcode } = require("../../utils/constants");
const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });
  res.status(HTTPcode.NO_CONTENT).json({
    status: "succes",
    code: HTTPcode.NO_CONTENT,
  });
};

module.exports = logout;

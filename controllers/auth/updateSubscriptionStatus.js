const { User } = require("../../models/");
const { HTTPcode } = require("../../utils/constants");
const { sendSuccessRes } = require("../../utils/");
const updateSubscriptionStatus = async (req, res) => {
  const userId = req.user._id;
  const { subscription } = req.body;

  const updateSubscriptionStatus = await User.findOneAndUpdate(
    { _id: userId },
    { subscription },
    {
      new: true,
    }
  );

  if (!updateSubscriptionStatus) {
    res.status(HTTPcode.NOT_FOUND).json({
      status: "error",
      code: HTTPcode.NOT_FOUND,
      message: "Not found user",
    });
  } else {
    sendSuccessRes(res, updateSubscriptionStatus);
  }
};
module.exports = updateSubscriptionStatus;

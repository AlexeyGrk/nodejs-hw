const { Contact } = require("../../models/");
const { HTTPcode } = require("../../utils/constants");
const { sendSuccessRes } = require("../../utils/");
const updateFavoriteStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const userId = req.user._id;
  const updateFavoriteStatus = await Contact.findOneAndUpdate(
    { _id: contactId, owner: userId },
    { favorite },
    {
      new: true,
    }
  );

  if (!updateFavoriteStatus) {
    res.status(HTTPcode.NOT_FOUND).json({
      status: "error",
      code: HTTPcode.NOT_FOUND,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, updateFavoriteStatus);
  }
};
module.exports = updateFavoriteStatus;

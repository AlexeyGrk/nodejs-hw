const { Contact } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const updateFavoriteStatus = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;

  const updateFavoriteStatus = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    {
      new: true,
    }
  );

  if (!updateFavoriteStatus) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, updateFavoriteStatus, 200);
  }
};
module.exports = updateFavoriteStatus;

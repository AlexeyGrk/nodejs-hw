const { Contact } = require("../../models/");
const { HTTPcode } = require("../../utils/constants");
const { sendSuccessRes } = require("../../utils/");
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user._id;
  const updateById = await Contact.findOneAndUpdate(
    { _id: contactId, owner: userId },
    req.body,
    {
      new: true,
    }
  );

  if (!updateById) {
    res.status(HTTPcode.NOT_FOUND).json({
      status: "error",
      code: HTTPcode.NOT_FOUND,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, updateById);
  }
};
module.exports = updateById;

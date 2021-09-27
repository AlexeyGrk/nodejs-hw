const { Contact } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updateById = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!updateById) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, updateById, 200);
  }
};
module.exports = updateById;

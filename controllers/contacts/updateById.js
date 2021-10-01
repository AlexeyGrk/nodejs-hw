const { Contact } = require("../../models/");
const { HTTPcode } = require("../../utils/constants");
const { sendSuccessRes } = require("../../utils/");
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updateById = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

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

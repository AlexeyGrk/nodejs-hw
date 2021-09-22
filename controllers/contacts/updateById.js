const contactsOperations = require("../../model/");
const { sendSuccessRes } = require("../../utils/");
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updateById = await contactsOperations.updateById(contactId, req.body);

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

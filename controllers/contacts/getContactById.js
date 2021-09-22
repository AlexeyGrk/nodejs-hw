const contactsOperations = require("../../model/");
const { sendSuccessRes } = require("../../utils/");
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsOperations.getContactById(contactId);
  if (!contact) {
    const error = new Error(`Contact with id ${contactId} not found`);
    error.status = 404;
    throw error;
  }
  sendSuccessRes(res, contact);
};
module.exports = getContactById;

const { Contact } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const { HTTPcode } = require("../../utils/constants");
const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page, limit, favorite = null } = req.query;
  const optionSearch = {
    owner: _id,
  };
  if (favorite !== null) {
    optionSearch.favorite = favorite;
  }
  if (!page || !limit) {
    const contacts = await Contact.find(
      optionSearch,
      "_id name phone email favorite"
    );
    sendSuccessRes(res, contacts);
  } else {
    const { docs, ...rest } = await Contact.paginate(optionSearch, {
      page,
      limit,
    });
    res.status(HTTPcode.OK).json({
      status: "success",
      code: HTTPcode.OK,
      contacts: docs,
      ...rest,
    });
  }
};
module.exports = listContacts;

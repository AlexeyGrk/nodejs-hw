const jwt = require("jsonwebtoken");
const { HTTPcode } = require("../utils/constants");
const { User } = require("../models/");
const { SECRET_KEY } = process.env;
const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(HTTPcode.UNAUTHORIZED).json({
      status: "error",
      code: HTTPcode.UNAUTHORIZED,
      message: "Not authorized",
    });
    return;
  }
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    res.status(HTTPcode.UNAUTHORIZED).json({
      status: "error",
      code: HTTPcode.UNAUTHORIZED,
      message: "Not authorized",
    });
    return;
  }
  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(_id);
    if (!user.token) {
      res.status(HTTPcode.UNAUTHORIZED).json({
        status: "error",
        code: HTTPcode.UNAUTHORIZED,
        message: "Not authorized",
      });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(HTTPcode.UNAUTHORIZED).json({
      status: "error",
      code: HTTPcode.UNAUTHORIZED,
      message: "Not authorized",
    });
    return;
  }
};
module.exports = authenticate;

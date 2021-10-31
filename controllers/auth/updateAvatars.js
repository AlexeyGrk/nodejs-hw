const { User } = require("../../models/");
const Jimp = require("jimp");
const { HTTPcode } = require("../../utils/constants");
const { sendSuccessRes } = require("../../utils/");
const fs = require("fs/promises");
const path = require("path");
const uploadDir = path.join(__dirname, "../../", "public");

const updateAvatars = async (req, res) => {
  const { originalname, path: pathName } = req.file;
  const [extention] = originalname.split(".").reverse();
  const newFileName = `avatar-image_users-${req.user._id}.${extention}`;
  const FileName = path.join(uploadDir, "avatars", newFileName);
  try {
    Jimp.read(pathName)
      .then((lenna) => {
        return lenna
          .resize(256, 256) // resize
          .quality(60) // set JPEG quality
          .greyscale() // set greyscale
          .write(FileName); // save
      })
      .catch((err) => {
        console.error(err);
      });
    await fs.rename(pathName, FileName);
    const image = path.join("avatars", newFileName);

    const userId = req.user._id;

    const updateAvatars = await User.findOneAndUpdate(
      { _id: userId },
      { avatarURL: image },
      {
        new: true,
      }
    );
    if (!updateAvatars) {
      res.status(HTTPcode.NOT_FOUND).json({
        status: "error",
        code: HTTPcode.NOT_FOUND,
        message: "Not found user",
      });
    } else {
      res.status(200).json({
        status: "success",
        code: HTTPcode.OK,
        avatarURL: image,
      });
    }
  } catch (error) {
    await fs.unlink(pathName);
    throw error;
  }
};
module.exports = updateAvatars;

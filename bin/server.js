const mongoose = require("mongoose");
require("dotenv").config();

const app = require("../app");

const PORT = process.env.PORT || 3000;
const { DB_HOST } = process.env;

const Contact = model("contact", contactsSchema);
// const newContact = {
//   name: "Maria Magdalini",
//   phone: "933-991",
//   email: "maria123@mail.ru",
// };
mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

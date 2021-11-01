const express = require("express");

const logger = require("morgan");
const cors = require("cors");

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/api/auth");
const { HTTPcode } = require("./utils/constants");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(HTTPcode.NOT_FOUND).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const {
    status = HTTPcode.ITERNAL_SERVER_ERROR,
    message = "Server error,sorry",
  } = err;
  res.status(status).json({ message });
});

module.exports = app;

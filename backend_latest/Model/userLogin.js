const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserLoginSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("dataHandel", UserLoginSchema, "userData");
// mongoose.models.userData ||

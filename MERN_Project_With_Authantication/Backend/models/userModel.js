const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  const userExists = await this.findOne({ email });

  if (!email || !password) {
    throw Error("Both fields are manadatory!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid format.");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Min 8 chars with uppercase, lowercase, number & @.");
  }

  if (userExists) {
    throw Error("Email already exists!");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hashedPassword });
  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Both fields are manadatory!");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect Email!");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("Incorrect Password!");
  }

  return user;
};

module.exports = mongoose.model("user", userSchema);

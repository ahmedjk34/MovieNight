const userModel = require("../models/userModel");

exports.createUser = async function (req, res) {
  try {
    const userExists = await userModel.where("userId").equals(id);
    console.log(userExists, 1);
    const userId = req.body.id;
    const reviews = [];
    const lists = [];
    await userModel.create({ userId, reviews, lists });
  } catch (error) {
    console.log(error);
  }
};

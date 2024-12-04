const mongoose = require("mongoose");

const mongouri =
  process.env.MONGO_URI || "mongodb://localhost:27017/campus-connect";
const dbconnect = async () => {
  await mongoose
    .connect(mongouri)
    .then(() => {
      console.log("-- DataBase Connect Successfully --");
    })

    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbconnect;

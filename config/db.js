const mongoose = require("mongoose");
const config = require("config");
//const db = config.get("mongoURI");
const db = process.env.mongoURI;

//arrow function
//asynchronous
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("mongoDB connected...");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

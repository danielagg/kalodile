const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Connected to Mongo DB.");
  } catch (ex) {
    console.log(ex);
    process.exit(1);
  }
};

module.exports = connectDb;

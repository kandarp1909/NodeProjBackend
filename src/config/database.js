const mongoose = require("mongoose");
const connectDb = async () => {
  await mongoose.connect(
    ""
  );
};

module.exports = {
  connectDb,
};
// connectDb()
//   .then(() => {
//     console.log("Database connected successfully");
//   })
//   .catch((error) => {
//     console.log("Database cannot be connected", error);
//   });

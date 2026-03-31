const mongoose = require("mongoose");
const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://node_learn:Kandarp@nodelearn.dfkvzq6.mongodb.net/devConnect"
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

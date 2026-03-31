const express = require("express");

const { connectDb } = require("./config/database");

const app = express();
const { User } = require("./models/user");
const cors =require('cors')

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authRouter=require("../src/routes/auth")
const profileRouter=require("../src/routes/profile")
const requestRouter=require("../src/routes/requests")
const userRouter =require("../src/routes/user")
const corsOptions = {
  origin:  "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


app.use("/",authRouter)
app.use("/",profileRouter)
app.use("/",requestRouter)
app.use("/",userRouter)
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const user = await User.find({
//       emailId: userEmail,
//     });
//     res.send(user);
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });
// app.get("/feed", async (req, res) => {
//   const userEmail = req.body.emailId;
//   try {
//     const user = await User.find({});
//     res.send(user);
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// });
// app.delete("/delete", async (req, res) => {
//   const userId = req.body.userId;
//   try {
//     await User.findByIdAndDelete(userId);
//     res.send("User deleted successfully");
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// }); 
// app.patch("/update/:userId", async (req, res) => {
//   const data = req.body;
//   const userId = req.params?.userId;

//   try {
//     const allowedKeys = ["firstName", "lastName", "password"];
//     const updateAllowed = (obj) => {
//       return Object.keys(obj).every((d) => allowedKeys.includes(d));
//     };
//     if (!updateAllowed(data)) {
//       throw new Error("update notAllowed");
//     }

//     await User.findByIdAndUpdate({ _id: userId }, data, {
//       runValidators: true,
//     });
//     res.send("update Successful");
//   } catch (err) {
//     res.status(400).send("update unsucessfull");
//   }
// });




connectDb().then(() => {
  console.log("Database connected successfully");
  app.listen(7777, () => {
    console.log("server started");
  });
});

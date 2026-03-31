const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../Middleware/auth");
const { validateProfileEditData } = require("../utils/validation");
profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: ", err);
  }
});
profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateProfileEditData(req)) {
      throw new Error("Invalid edit request");
    }
    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));
    await loggedInUser.save();
    res.json({
      message: `${loggedInUser.firstName}, your profile was updated successfully`,
      data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/changepassword", userAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const loggedInUser = req.user;
  loggedInUser[password] = newPassword;
  try {
    const isPasswordRight = await user.validatePassword(currentPassword);
    if (isPasswordRight) {
      loggedInUser[password] = newPassword;
      await loggedInUser.save();
      res.json({
        message: `${loggedInUser.firstName}, your password was changed successfully`,
        data: loggedInUser,
      });
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;

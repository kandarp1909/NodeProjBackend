const validator = require("validator");
const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  if (!validator.isEmail(emailId)) throw new Error("Not a valid Email ID");
  else if (!validator.isStrongPassword(password))
    throw new Error("Please enter strong Password");
};
const validateProfileEditData=(req)=>{
   const allowedEditFields=["firstName","lastName","emailId","photoUrl","gender","age","about","skills"]
   const isEditAllowed=Object.keys(req.body).every((field)=>allowedEditFields.includes(field))
   return isEditAllowed
}

module.exports = {
  validateSignUpData,
  validateProfileEditData
};

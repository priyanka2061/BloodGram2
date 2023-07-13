// const dataHandel = require("../Model/model");
const userData = require("../Model/userLogin");

// exports.saveData = (req, res) => {
//   const {
//     fullName,
//     email,
//     phone,
//     bloodGroup,
//     gender,
//     age,
//     weight,
//     last_date_donation,
//     zip_code,
//     state,
//     district,
//   } = req.body;

//   const savemyData = new dataHandel({
//     fullName,
//     email,
//     phone,
//     bloodGroup,
//     gender,
//     age,
//     weight,
//     last_date_donation,
//     zip_code,
//     state,
//     district,
//   });
//   savemyData
//     .save()
//     .then((result) => {
//       res.json({
//         message: "Data Save Successfully!!!",
//         response: result,
//       });
//     })
//     .catch((error) => {
//       res.json({
//         message: error,
//       });
//     });
// };

exports.Login = (req, res) => {
  const { username, password } = req.body;

  userData
    .find({
      username,
      password,
    })
    .then((result) => {
      if (result.length >= 1) {
        res.status(200).json({
          message: "Login Successfully!!",
          response: result,
        });
      } else {
        res.status(200).json({
          message: "Please chec data",
          response: result,
        });
      }
    })
    .catch((error) => {
      res.json({
        message: error,
      });
    });
};

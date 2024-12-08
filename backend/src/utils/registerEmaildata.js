
exports.registerEmaildata = (name, email, password, verificationCode)=> {
  const mailData = {
    name,
    intro: `Welcome to Edu♾️onnect, ${name}, you have tried to register with the following credentials:`,
    table: {
      data: [
        {
          "Email": email,
          "Password": password,
          "Verification code": verificationCode,
        },
      ],
    },    
    outro: "Please Verify your email by entering the verification code.\nFeel free to contact for any query.\n \n Thank you 🫱🏻‍🫲🏾",
  };

  return mailData;
}

exports.welcomeEmaildata= (name, email) => {
  const mailData = {
    name,
    intro: `Welcome to Edu♾️onnect  ${name}, you have successfully registered with you email: 
    \n${email}.
    \n 
    \nWe are excited to have you on board! 🎉`,
    outro: "\nFeel free to contact for any query.\n\nThank you 🫱🏻‍🫲🏾",
  };

  return mailData;
}
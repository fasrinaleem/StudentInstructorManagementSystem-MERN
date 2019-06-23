class SMS {
  sendSMS(smsObj) {
    // Your Account Sid and Auth Token from twilio.com/console
    const accountSid = "AC765e6daabdbee2af8e1b7b07309a4b5d";
    const authToken = "b018f6ebf4cbad8f2f2fb6009ea5bfdf";
    const client = require("twilio")(accountSid, authToken);

    client.messages
      .create({
        body:
          "Dear Instructor,You are assign for new course. Please check you email as soon as possible.",
        from: "+13393090187",
        //to: smsObj.to.replace("0", "+94")
        to: "+94767739896"
      })
      .then(message =>
        console.log(message.sid + " Message has been successfully send")
      );
  }
}

module.exports = new SMS();

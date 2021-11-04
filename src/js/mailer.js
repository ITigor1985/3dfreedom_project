
const nodemailer = require('nodemailer');

  
const formEl = document.querySelector('.call-back');

const btn = document.querySelector('.consultation__form-button ');
const inputName = document.querySelector('.modal-form__name');
const inputeEmail = document.querySelector('.modal-form__tel');
const formData = {};

inputeEmail.addEventListener('input', changeInput);
inputName.addEventListener('input', changeInput);
formEl.addEventListener('submit', formSubmit)

function changeInput(event) {    
    //formData[event.target.name] = event.target.value;    
  }
  function formSubmit(event) {
    event.preventDefault();    
    const {
        elements: { username, telephon },
      } = event.currentTarget;
      formData.username=username.value;
      formData.telephon=telephon.value
    console.log(formData);
    event.currentTarget.reset();
  }

//   const transporter = nodemailer.createTransport({
  //     host:'smtp.gmail.com',
//       port:587,
//       secure: false,
      
//         auth:{
//             user: 'anvmail2021@gmail.com',
//             pass: 'ma14riha'
//         }
//   })
//  const mailOtions = {
//      from:'anvmail2021@gmail.com',
//      to:'anvmail2021@gmail.com',
//      subject: "c caita",
//      text: `${formData.username} and ${formData.telephon}`
//  }

//  transporter.sendMail(mailOtions, err => console.log(err));


//  const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'anvmail2021@gmail.com', // generated ethereal user
      pass: 'ma14riha', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <anvmail2021@gmail.com>', // sender address
    to: "anvmail2021@gmail.com, anvmail2021@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
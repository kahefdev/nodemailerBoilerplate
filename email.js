const nodemailer = require('nodemailer');

module.exports = class Email {
  constructor(data) {
    this.from = 'info@dota.com';
    this.to = 'nevermore@gmail.com'
    this.data = data;
  }
  newTransport() {
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(subject) {
    let html;
    let mailOptions;

    //1) Render html based on the pug template
      // html = pug.renderFile(`${__dirname}/../views/email/failedPayments.pug`, {
      //  data:this.data
      // });
  
    //2)Mail Options
    // mailOptions = {
    //   from: this.from,
    //   to: this.to,
    //   subject,
    //   html,
    //   text: htmltotext.fromString(html),
    //   // html:
    // };
    mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      text: JSON.stringify(this.data),
      // html:
    };
    //Create Transport and send email
    await this.newTransport().sendMail(mailOptions,(err,info)=>{
      console.log(err)
      console.log(info)
    });
  }
  async sendEmail() {
    await this.send('**Email Subject**');
  }
};
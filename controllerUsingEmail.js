const email = require('./email');

const sampleFunction = (req,res,next)=>{
    let data = 'Anything';
    const sendEmail = new email(data);
    sendEmail.failedPayments();
}

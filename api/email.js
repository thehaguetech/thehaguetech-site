const sgMail = require('@sendgrid/mail');

const sendMail = function(from) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'launch@thehaguetech.com',
    from: `${from.name} <${from.email}>`,
    subject: 'Email from thehaguetech.nl',
    html: from.message.replace("\n", '<br/>') + "<br /><br />"
  };
  sgMail.send(msg);
}

module.exports = { sendMail }

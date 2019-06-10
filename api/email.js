const sgMail = require('@sendgrid/mail');

const sendMail = function(from) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'mail@bartroorda.nl',
    from: `${from.name} <${from.email}>`,
    subject: 'Email from thehaguetech.nl',
    html: from.message.replace("\n", '<br/>') + "<br /><br />"
          + (from.name ? `Name: ${from.name}` + "<br />" : '')
          + (from.email ? `Email: ${from.email}` + "<br />" : '')
          + (from.tel ? `Phone number: ${from.tel}` + "<br />" : '')
  };
  sgMail.send(msg);
}

module.exports = { sendMail }

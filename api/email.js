const sgMail = require('@sendgrid/mail');

const sendMail = function(from) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'launch@thehaguetech.com',
    from: 'website@thehaguetech.com',
    subject: 'Email from thehaguetech.nl',
    html: `${from.name} <${from.email}> sent the following message:<br /><hr /><br />` +
          from.message.replace("\n", '<br/>') + "<br /><br />"
  };
  sgMail.send(msg);
}

module.exports = { sendMail }

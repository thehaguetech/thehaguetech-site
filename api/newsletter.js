const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP_ID);

const newsletterAdd = async function(contact, callback) {
  return await mailchimp.request({
    method : 'post',
    path : '/lists/f29698d044/members',
    body : {
      "email_address": contact.email,
      "status": "pending",
      "merge_fields": {
        "FNAME": contact.fname,
        "LNAME": contact.lname,
        "CNAME": contact.cname
      }
    }
  }, callback)
}

module.exports = { newsletterAdd }

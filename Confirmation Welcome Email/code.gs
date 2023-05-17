// Simple function to send the email to users that completed registration on Google Forms using Google Apps Script

function sendEmail(e) {
  
  var htmlBody= HtmlService.createHtmlOutputFromFile('Email').getContent();
  var recipient=e.response.getRespondentEmail();
  if (recipient!==undefined){
    MailApp.sendEmail({
      to:recipient,
      from: 'Anime City',
      subject: 'AC Community Confirmation Email',
      htmlBody: htmlBody,
      // body:body,

    });
  }


}

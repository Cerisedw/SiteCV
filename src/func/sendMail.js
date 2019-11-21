import $ from 'jquery';
import { validateEmail } from './verifyMail';

export const sendMail = () => {
  const message = $('.messageInp').val();
  const titreMail = $('.titreInp').val();
  const emailFrom = $('.emailInp').val();

  if (validateEmail(emailFrom)) {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'myrtille1221@gmail.com',
      Password: '4a01ee2d-dad4-492f-ba83-f0dc37e66dcb',
      To: 'cerise.mailpro@gmail.com',
      From: `${emailFrom}`,
      Subject: `${titreMail}`,
      Body: `${message}`,
    }).then(
      () => { alert('Message envoyé'); window.location.reload(); },
    );
  } else {
    console.log('email non valide');
  }
};

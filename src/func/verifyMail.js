import $ from 'jquery';

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export const envoieMail = (event) => {
  event.preventDefault();
  const message = $('.messageInp').val();
  const titreMail = $('.titreInp').val();
  const emailFrom = $('.emailInp').val();

  if (validateEmail(emailFrom)) {
    // eslint-disable-next-line no-undef
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'cyarin478@gmail.com',
      Password: 'd0eb6dcb-bd62-44df-a8de-8abdbd2de605',
      To: 'cyarin478@gmail.com',
      From: 'cyarin478@gmail.com',
      Subject: `${titreMail}`,
      Body: `Le message est : ${message}
             Auteur du mail : ${emailFrom}`,
    }).then(
      // eslint-disable-next-line no-alert
      () => {
        alert('Message envoyé');
        $('.messageInp').val('');
        $('.titreInp').val('');
        $('.emailInp').val('');
      },
    );
  } else {
    console.log('email non valide');
  }
};

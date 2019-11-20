import $ from 'jquery';

$('#btnContact').on('click', (e) => {
  e.preventDefault();
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'myrtille1221@gmail.com',
    Password: 'c96b4f21-1fe5-4b58-92b1-1f74246b18e9',
    To: 'CarnetsDeCerise@gmail.com',
    From: '',
    Subject: '',
    Body: '',
  }).then(
    () => { alert('Message envoyé'); window.location.reload(); },
  );
});

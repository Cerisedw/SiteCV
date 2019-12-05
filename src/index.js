import $ from 'jquery';
import { change } from './func/portfolioBtn';
import { logobtn, menubtn } from './func/menuBtn';
import { logoDropdownBtn, menuDropdownBtn } from './func/menuDropdownBtn';
import { arrImg } from './data/data';
import { getSrcImg } from './func/portfolioCreaC';
import { portInteraction } from './func/Portfolio';
import { intervalMea } from './func/meaAccueil';
import { validateEmail } from './func/verifyMail';
import { createBtnPika } from './func/logoChangePika';


// loader
$(window).on('load', () => {
  $('.loader').fadeOut('slow');
});
// $(document).ready(() => {
//  $('.loader').fadeOut('slow');
// });

// btn menu
const btnportfolio = $('#navigation a.portfolio');
const btncv = $('#navigation a.cv');
const btncontact = $('#navigation a.contact');
const btnlogo = $('#navigation div.logo');

btnlogo.on('click', () => { logobtn(); });
btncontact.on('click', (e) => { menubtn(e); });
btnportfolio.on('click', (e) => { menubtn(e); });
btncv.on('click', (e) => { menubtn(e); });

// portfolio bouton
const btn = $('.btn-portfolio');
btn.on('click', change);

// portfolio gallerie
getSrcImg(arrImg);
const works = $('#portfolio img');
portInteraction(works);

// bouton return

const btnReturn = $('.return');
btnReturn.on('click', () => {
  $('#portfolio').css({ display: 'block' });
  $('#workInfo').css({ display: 'none' });
});

// btn dropdown

const btnDrop = $('#btnDropdown');
btnDrop.on('click', () => {
  $('.drop').slideToggle('slow');
});

// menu dropdown

const btnDropportfolio = $('.drop a.portfolio');
const btnDropcv = $('.drop a.cv');
const btnDropcontact = $('.drop a.contact');
const btnDroplogo = $('.drop div.logo');

btnDroplogo.on('click', () => { logoDropdownBtn(); });
btnDropcontact.on('click', (e) => { menuDropdownBtn(e); });
btnDropportfolio.on('click', (e) => { menuDropdownBtn(e); });
btnDropcv.on('click', (e) => { menuDropdownBtn(e); });


// MEA accueil
intervalMea(arrImg);
setInterval(() => {
  intervalMea(arrImg);
}, 20000);


// Vérifier mail

$('.emailInp').on('keypress keyup paste', () => {
  const email = $('.emailInp').val();
  if (validateEmail(email)) {
    $('.emailInp').css({ border: 'solid 2px green' });
  } else {
    $('.emailInp').css({ border: 'solid 2px red' });
  }
});

// Envoie email
$('#btnContact').on('click', (e) => {
  e.preventDefault();
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
      () => { alert('Message envoyé'); },
    );
  } else {
    console.log('email non valide');
  }
});


// easter egg
// changeLogoPika();
createBtnPika();

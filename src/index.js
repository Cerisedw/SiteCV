import $ from 'jquery';
import { change } from './func/portfolioBtn';
import { logobtn, menubtn } from './func/menuBtn';
import { logoDropdownBtn, menuDropdownBtn } from './func/menuDropdownBtn';
import { arrImg } from './data/data';
import { getSrcImg } from './func/portfolioCreaC';
import { portInteraction } from './func/Portfolio';
import { intervalMea } from './func/meaAccueil';
import { validateEmail, envoieMail } from './func/verifyMail';
import { createBtnPika } from './func/logoChangePika';


// loader
$(window).on('load', () => {
  $('.loader').fadeOut('slow');
});


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
}, 7500);


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
  envoieMail(e);
});


// easter egg
createBtnPika();

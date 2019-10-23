import $ from 'jquery';
import { change } from './portfolioBtn';
import { logobtn, menubtn } from './menuBtn';
import { logoDropdownBtn, menuDropdownBtn } from './menuDropdownBtn';

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
const btn = $('#btn-portfolio');
btn.on('click', change);


// portfolio creation du contenu des projets (si ils sont sous forme obj JS)
function createProjectContent(img) {
  const work = $('.workContent');
  work.empty();
  work.append(`<h2>${img.nom}</h2>`);
  work.append(`<img src='${img.lien}'>`);
  work.append('<h3>Technologies utilisées</h3>');
  work.append('<p>something</p>');
  work.append('<h3>Descritpions</h3>');
  work.append('<p>something</p>');
}

// portfolio img

const arrImg = {
  design: [
    { lien: '.\\assets\\images\\03.jpg', nom: 'Monsieur' },
    { lien: '.\\assets\\images\\05.jpg', nom: 'Madame' },
    { lien: '.\\assets\\images\\04.jpg', nom: 'Araignée' },
    { lien: '.\\assets\\images\\02.jpg', nom: 'Bateau' },
  ],
  programmation: [
    { lien: '.\\assets\\images\\alicia.jpg', nom: 'Alicia' },
    { lien: '.\\assets\\images\\2272015365_0dd136bea7_o.jpg', nom: 'Lunette' },
  ],
};

function getSrcImg(objImg) {
  for (const el of objImg.design) {
    $('#design').append(`<img class="${el.nom}" src ="${el.lien}">`);
  }
  for (const el of objImg.programmation) {
    $('#programmation').append(`<img class="${el.nom}" src ="${el.lien}">`);
  }
}


for (let i = 0; i < 1; i++) {
  getSrcImg(arrImg);
}

const works = $('#portfolio img');

for (const img of works) {
  // const str = $(img)[0].attributes.src.nodeValue;


  $(img).on('click', () => {
    $('.sectionMain').css({ display: 'none' });
    $('#workInfo').css({ display: 'block' });
    // createProjectContent(result);
  });
}


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

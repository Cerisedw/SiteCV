import $ from 'jquery';


// btn menu
const btnportfolio = $('#navigation a.portfolio');
const btncv = $('#navigation a.cv');
const btncontact = $('#navigation a.contact');
const btnlogo = $('#navigation div.logo');

// logo home

function logoBtn() {
  const y = $('#about');
  $('header div ul li a').css({
    backgroundColor: '',
    color: '',
  });
  $('.sectionMain').css({ display: 'none' });
  $('#workInfo').css({ display: 'none' });
  y.css('display', 'block');
}

// btn menu bloc
function menuBtn(x) {
  const str = x.target.attributes.class.nodeValue;
  const y = $(`#${str}`);

  $('header div ul li a').css({
    backgroundColor: '',
    color: '',
  });
  $('.sectionMain').css({ display: 'none' });
  $('#workInfo').css({ display: 'none' });

  $(x.target).css({
    backgroundColor: 'white',
    color: '#2b2934',
  });
  y.css('display', 'block');
}


btnlogo.on('click', () => { logoBtn(); });
btncontact.on('click', (e) => { menuBtn(e); });
btnportfolio.on('click', (e) => { menuBtn(e); });
btncv.on('click', (e) => { menuBtn(e); });


// portfolio bouton
const btn = $('#btn-portfolio');
btn.on('click', () => {
  const d = $('#design');
  const p = $('#programmation');
  if (d.css('display') === 'block') {
    d.css({ display: 'none' });
    p.css({ display: 'block' });
    $('#portfolio h3').text('Programmation');
  } else {
    d.css({ display: 'block' });
    p.css({ display: 'none' });
    $('#portfolio h3').text('Design');
  }
});

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
  design: [{ lien: '.\\assets\\images\\03.jpg', nom: 'Monsieur' }, { lien: '.\\assets\\images\\05.jpg', nom: 'Madame' },
    { lien: '.\\assets\\images\\04.jpg', nom: 'Araignée' }, { lien: '.\\assets\\images\\02.jpg', nom: 'Bateau' }],
  programmation: [{ lien: '.\\assets\\images\\alicia.jpg', nom: 'Alicia' }, { lien: '.\\assets\\images\\2272015365_0dd136bea7_o.jpg', nom: 'Lunette' }],
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
  const imgObj = { lien: $(img)[0].attributes.src.nodeValue, nom: $(img)[0].attributes.class.nodeValue };
  console.log(imgObj);
  $(img).on('click', () => {
    $('.sectionMain').css({ display: 'none' });
    $('#workInfo').css({ display: 'block' });
    createProjectContent(imgObj);
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


function dropMenuBtn(x) {
  const str = x.target.attributes.class.nodeValue;
  const y = $(`#${str}`);
  $('.sectionMain').css({ display: 'none' });
  $('#workInfo').css({ display: 'none' });
  y.css('display', 'block');
  $('.drop').slideToggle('slow');
}

function dropLogoBtn() {
  const y = $('#about');
  $('.sectionMain').css({ display: 'none' });
  $('#workInfo').css({ display: 'none' });
  y.css('display', 'block');
  $('.drop').slideToggle('slow');
}


btnDroplogo.on('click', () => { dropLogoBtn(); });
btnDropcontact.on('click', (e) => { dropMenuBtn(e); });
btnDropportfolio.on('click', (e) => { dropMenuBtn(e); });
btnDropcv.on('click', (e) => { dropMenuBtn(e); });

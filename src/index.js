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


// portfolio img

const arrImg = {
  design: ['.\\assets\\images\\03.jpg', '.\\assets\\images\\05.jpg', '.\\assets\\images\\04.jpg', '.\\assets\\images\\02.jpg'],
  programmation: ['.\\assets\\images\\alicia.jpg', '.\\assets\\images\\2272015365_0dd136bea7_o.jpg'],
};

function getSrcImg(objImg) {
  for (const el of objImg.design) {
    $('#design').append(`<img src ="${el}">`);
  }
  for (const el of objImg.programmation) {
    $('#programmation').append(`<img src ="${el}">`);
  }
}

for (let i = 0; i < 5; i++) {
  getSrcImg(arrImg);
}


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
  y.css('display', 'block');
  $('.drop').slideToggle('slow');
}

function dropLogoBtn() {
  const y = $('#about');
  $('.sectionMain').css({ display: 'none' });
  y.css('display', 'block');
  $('.drop').slideToggle('slow');
}


btnDroplogo.on('click', () => { dropLogoBtn(); });
btnDropcontact.on('click', (e) => { dropMenuBtn(e); });
btnDropportfolio.on('click', (e) => { dropMenuBtn(e); });
btnDropcv.on('click', (e) => { dropMenuBtn(e); });

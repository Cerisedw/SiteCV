import $ from 'jquery';

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

// btn menu
const btnportfolio = $('a.portfolio');
const btncv = $('a.cv');
const btncontact = $('a.contact');
const btnlogo = $('div.logo');

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

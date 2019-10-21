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

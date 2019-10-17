import $ from 'jquery';

const btn = $('#btn-portfolio');
btn.on('click', () => {
  const d = $('#design');
  const p = $('#programmation');
  if (d.css('display') === 'block') {
    d.css({ display: 'none' });
    p.css({ display: 'block' });
    btn.text('Programmation');
  } else {
    d.css({ display: 'block' });
    p.css({ display: 'none' });
    btn.text('Design');
  }
});

// btn menu
const btnportfolio = $('a.portfolio');
const btnabout = $('a.about');
const btncv = $('a.cv');
const btncontact = $('a.contact');

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


btnabout.on('click', (e) => { menuBtn(e); });
btncontact.on('click', (e) => { menuBtn(e); });
btnportfolio.on('click', (e) => { menuBtn(e); });
btncv.on('click', (e) => { menuBtn(e); });

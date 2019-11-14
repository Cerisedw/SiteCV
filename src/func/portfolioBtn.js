import $ from 'jquery';

export const change = (e) => {
  const d = $('#design');
  const p = $('#programmation');
  if (d.css('display') === 'block') {
    d.css({ display: 'none' });
    p.css({ display: 'block' });
    $('#portfolio h3').text('Programmation');
    e.target.innerText = 'Design';
  } else {
    d.css({ display: 'block' });
    p.css({ display: 'none' });
    $('#portfolio h3').text('Design');
    e.target.innerText = 'Programmation';
  }
};

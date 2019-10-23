import $ from 'jquery';

// logo home

export const logobtn = () => {
  const y = $('#about');
  $('header div ul li a').css({
    backgroundColor: '',
    color: '',
  });
  $('.sectionMain').css({ display: 'none' });
  $('#workInfo').css({ display: 'none' });
  y.css('display', 'block');
};

// btn menu bloc
export const menubtn = (x) => {
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
};

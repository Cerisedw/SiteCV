import $ from 'jquery';

export const menuDropdownBtn = (x) => {
  const str = x.target.attributes.class.nodeValue;
  const y = $(`#${str}`);
  $('.sectionMain').css({ display: 'none' });
  $('#workInfo').css({ display: 'none' });
  y.css('display', 'block');
  $('.drop').slideToggle('slow');
  $('#btnDropdown').prop('checked', false);
};

export const logoDropdownBtn = () => {
  const y = $('#about');
  $('.sectionMain').css({ display: 'none' });
  $('#workInfo').css({ display: 'none' });
  y.css('display', 'block');
  $('.drop').slideToggle('slow');
  $('#btnDropdown').prop('checked', false);
};

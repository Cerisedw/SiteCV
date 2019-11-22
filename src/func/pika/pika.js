import $ from 'jquery';

export const pika = () => {
  $('.loading').height($(window).height());
  $('.loading').width($(window).width());


  $('.loading img').css({
    paddingTop: ($('.loading').height() - $('.loading img').height()) / 2,
    paddingLeft: ($('.loading').width() - $('.loading img').width()) / 2,
  });

  $(window).resize(() => {
    $('.loading').height($(window).height());
    $('.loading').width($(window).width());


    $('.loading img').css({
      paddingTop: ($('.loading').height() - $('.loading img').height()) / 2,
      paddingLeft: ($('.loading').width() - $('.loading img').width()) / 2,
    });
  });

  $(window).mousemove((e) => {
    $('.original').css({
      left: e.pageX - 16,
      top: e.pageY - 16,
    });
  });

  $('#Pika').on('click', (e) => {
    $('.original').clone(true).appendTo('body').css({
      left: e.pageX - 16,
      top: e.pageY - 16,
    })
      .removeClass('original');
  });
};

$('.loading').height($(window).height());
$('.loading').width($(window).width());


$('.loading img').css({
  paddingTop: ($('.loading').height() - $('.loading img').height()) / 2,
  paddingLeft: ($('.loading').width() - $('.loading img').width()) / 2,
});

$(window).resize(() => {
  $('.loading').height($(window).height());
  $('.loading').width($(window).width());


  $('.loading img').css({
    paddingTop: ($('.loading').height() - $('.loading img').height()) / 2,
    paddingLeft: ($('.loading').width() - $('.loading img').width()) / 2,
  });
});

$(window).mousemove((e) => {
  $('.original').css({
    left: e.pageX - 16,
    top: e.pageY - 16,
  });
});

$('#Pika').on('click', (e) => {
  $('.original').clone(true).appendTo('body').css({
    left: e.pageX - 16,
    top: e.pageY - 16,
  })
    .removeClass('original');
});

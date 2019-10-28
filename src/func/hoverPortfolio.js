import $ from 'jquery';

export const hoverPort = (img) => {
  img.on({
    mouseenter:
        (e) => {
          console.log(e.target);
          const toto = $(`<p>${$(e.target)[0].attributes.title.nodeValue}</p>`);
          toto.css({
            position: 'absolute', backgroundColor: '#2B2934', color: '#01B3C8', fontWeight: 'bold', fontSize: '1.8rem', padding: '10px', textAlign: 'center', maxWidth: '250px',
          });
          toto.prependTo($(e.target).parent());
        },
    mouseleave: (e) => {
      $(e.target).parent().find('p').last()
        .remove();
    },
  });
};

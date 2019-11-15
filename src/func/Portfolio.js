import $ from 'jquery';
import { createProjectContent, getWork } from './portfolioCreaC';
import { affBulletJournal } from './bulletJournal';


export const hoverPort = (img) => {
  img.on({
    mouseenter:
        (e) => {
          const toto = $(`<p>${$(e.target)[0].attributes.title.nodeValue}</p>`);
          toto.css({
            position: 'absolute',
            backgroundColor: '#2B2934',
            color: '#00B3CC',
            fontWeight: 'regular',
            fontSize: '1.8rem',
            padding: '10px',
            textAlign: 'center',
            width: '100%',
          });
          toto.prependTo($(e.target).parent());
        },
    mouseleave: (e) => {
      $(e.target).parent().find('p').last()
        .remove();
    },
  });
};


export const portInteraction = (works) => {
  for (const img of works) {
    hoverPort($(img));
    $(img).on('click', (e) => {
      $('.sectionMain').css({ display: 'none' });
      $(window).scrollTop();
      $('#workInfo').css({ display: 'block' });
      createProjectContent(getWork(e.target));
      $('#btnBullet').on('click', (e) => {
        if (!$('#Bullet').is(':empty')) {
          $('#Bullet').empty();
          e.target.innerText = 'Afficher';
        } else {
          affBulletJournal();
          e.target.innerText = 'Cacher';
        }
      });
    });
  }
};

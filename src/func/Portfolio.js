import $ from 'jquery';
import { createProjectContent, getWork } from './portfolioCreaC';
import { affBulletJournal } from './bulletJournal';
import { arrImg } from '../data/data';


export const hoverPort = (img) => {
  if ($(img).parent().parent()[0].id === 'design') {
    img.on({
      mouseenter:
        (e) => {
          const toto = $(`<p class="workTitle">${$(e.target)[0].attributes.title.nodeValue}</p>`);
          toto.prependTo($(e.target).parent());
        },
      mouseleave: (e) => {
        $(e.target).parent().find('p').last()
          .remove();
      },
    });
  } else {
    img.on({
      mouseenter:
        (e) => {
          const arrayWorks = arrImg.programmation
            .filter((work) => work.nom === $(e.target)[0].title);
          const stringTechno = arrayWorks[0].techno.reduce((acc, curr, ind) => {
            if (ind !== 0) {
              return `${curr} | ${acc}`;
            } return `${curr} ${acc}`;
          }, '');
          const toto = $(`<p class="workSpecs">${stringTechno}</p>`);
          toto.prependTo($(e.target).parent());
        },
      mouseleave: () => {
        $('.workSpecs')
          .remove();
      },
    });
  }
};


export const portInteraction = (works) => {
  for (const img of works) {
    hoverPort($(img));
    $(img).on('click', (e) => {
      $('.sectionMain').css({ display: 'none' });
      $(window).scrollTop();
      $('#workInfo').css({ display: 'block' });
      createProjectContent(getWork(e.target));
      $('#btnBullet').on('click', (f) => {
        const btnN = f;
        if (!$('#Bullet').is(':empty')) {
          $('#Bullet').empty();
          btnN.target.innerText = 'Afficher';
        } else {
          affBulletJournal();
          btnN.target.innerText = 'Cacher';
        }
      });
    });
  }
};

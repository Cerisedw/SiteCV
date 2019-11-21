import $ from 'jquery';
import { arrImg } from '../data/data';
import { createProjectContent } from './portfolioCreaC';
import { affBulletJournal } from './bulletJournal';

export const meaAccueil = (objImg) => {
  const nmbD = Math.floor(Math.random() * objImg.design.length);
  const meaD = objImg.design.filter((u) => u.id === nmbD);
  const divD = $('<div></div>');
  divD.css({ display: 'inline-block' });
  divD.append(`<h3>${meaD[0].nom}</h3>`);
  divD.append(`<img title="${meaD[0].nom}" src ="${meaD[0].lien}">`);
  $('#meaDesign').append(divD);

  const nmbP = Math.floor(Math.random() * objImg.programmation.length);
  const meaP = objImg.programmation.filter((u) => u.id === nmbP);
  const divP = $('<div></div>');
  divP.css({ display: 'inline-block' });
  divP.append(`<h3>${meaP[0].nom}</h3>`);
  divP.append(`<img title="${meaP[0].nom}" src ="${meaP[0].lien}">`);
  $('#meaProg').append(divP);
};


const getMeaWork = (target) => {
  const str = $(target)[0].attributes.title.nodeValue;
  const idImg = $(target).parent().parent()[0].id;
  console.log(idImg);
  const arr = idImg === 'meaDesign' ? arrImg.design : arrImg.programmation;
  let result;
  arr.forEach((work) => {
    if (work.nom === str) {
      result = work;
    }
  });
  return result;
};


export const meaInteraction = (works) => {
  for (const img of works) {
    $(img).on('click', (e) => {
      $('.sectionMain').css({ display: 'none' });
      $(window).scrollTop();
      $('#workInfo').css({ display: 'block' });
      createProjectContent(getMeaWork(e.target));
      $('#btnBullet').on('click', (f) => {
        if (!$('#Bullet').is(':empty')) {
          $('#Bullet').empty();
          f.target.innerText = 'Afficher';
        } else {
          affBulletJournal();
          f.target.innerText = 'Cacher';
        }
      });
    });
  }
};

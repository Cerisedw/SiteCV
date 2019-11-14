import $ from 'jquery';
import { arrImg } from '../data/data';

// trouver l'objet correspondant a la target dans la liste d'objet de data.js (arrImg)

export const getWork = (target) => {
  const str = $(target)[0].attributes.title.nodeValue;
  const idImg = $(target).parent().parent()[0].id;
  const arr = idImg === 'design' ? arrImg.design : arrImg.programmation;
  let result;
  arr.forEach((work) => {
    if (work.nom === str) {
      result = work;
    }
  });
  return result;
};

// portfolio creation du contenu des projets (si ils sont sous forme obj JS)
export const createProjectContent = (img) => {
  console.log(img);
  const work = $('.workContent');
  work.empty();

  work.append(`<h2>${img.nom}</h2>`);
  work.append(`<img src='${img.lien}'>`);
  work.append('<h3>Technologies utilisées</h3>');
  const ul = $('<ul></ul>');
  img.techno.forEach((e) => ul.append(`<li>${e}</li>`));

  work.append(ul);
  work.append('<h3>Descritpions</h3>');
  img.desc.forEach((e) => work.append(`<p>${e}</p>`));

  if (img.linGit) {
    const boutonProj = $('<div class="boutonProjet"></div>');
    boutonProj.append(`<a href='${img.linGit}' target='_blank'>Lien du projet</a>`);
    work.append(boutonProj);
  }
  if (img.lienDirect) {
    const boutonDirect = $('<div class="bouton"></div>');
    boutonDirect.append('<button id="btnBullet">Afficher</button>');
    const divDirect = $(`<div id="${img.lienDirect}"></div>`);
    work.append(boutonDirect);
    work.append(divDirect);
  }
};

// portfolio img


export const getSrcImg = (objImg) => {
  objImg.design.forEach((el) => {
    const divD = $("<div class='grid-item'></div>");
    divD.css({ display: 'inline-block' });
    divD.append(`<img title="${el.nom}" src ="${el.lien}">`);
    $('#design').append(divD);
  });

  objImg.programmation.forEach((el) => {
    const divP = $("<div class='grid-item'></div>");
    divP.css({ display: 'inline-block' });
    divP.append(`<img title="${el.nom}" src ="${el.lien}">`);
    $('#programmation').append(divP);
  });
};

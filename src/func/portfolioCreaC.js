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
  const work = $('.workContent');
  work.empty();
  const div1 = $(`
    <div class="col-12">
      <h2>${img.nom}</h2>
      <img src='${img.lien}'>
    </div>
  `);
  const div2 = $(`
    <div class="col-12 col-xl-6">
      <h3>Technologies utilisées</h3>
    </div>
  `);

  work.append(div1);
  const ul = $('<ul></ul>');
  img.techno.forEach((e) => ul.append(`<li>${e}</li>`));

  div2.append(ul);
  div2.append('<h3>Description</h3>');
  img.desc.forEach((e) => div2.append(`<p>${e}</p>`));

  if (img.linGit) {
    const boutonProj = $('<div class="boutonProjet"></div>');
    boutonProj.append(`<a href='${img.linGit}' target='_blank'>Lien du projet</a>`);
    div2.append(boutonProj);
  }
  work.append(div2);
  const div3 = $('<div class="col-12 col-xl-6"></div>');
  if (img.lienDirect) {
    const boutonDirect = $('<div class="bouton"></div>');
    boutonDirect.append('<button id="btnBullet">Afficher</button>');
    const divDirect = $(`<div id="${img.lienDirect}"></div>`);
    div2.append(boutonDirect);
    div3.append(divDirect);
    work.append(div3);
  }
};

// portfolio img


export const getSrcImg = (objImg) => {
  objImg.design.forEach((el) => {
    const divD = $(`
    <div class='grid-item listeProjet'>
      <img title="${el.nom}" src ="${el.lien}">
    </div>
    `);
    $('#design').append(divD);
  });

  objImg.programmation.forEach((el) => {
    const divP = $(`
    <div class='grid-item listeProjet'>
      <p class="workTitle">${el.nom}</p>
      <img title="${el.nom}" src ="${el.lien}">
    </div>
    `);
    $('#programmation').append(divP);
  });
};

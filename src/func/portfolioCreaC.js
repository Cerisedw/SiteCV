import $ from 'jquery';
import { arrImg } from '../data/data';

// trouver l'objet correspondant a la target dans la liste d'objet de data.js (arrImg)

export const getWork = (target) => {
  const str = $(target)[0].attributes.title.nodeValue;
  const idImg = $(target).parent().parent()[0].id;
  const arr = idImg === 'design' ? arrImg.design : arrImg.programmation;
  let result;
  for (const work of arr) {
    if (work.nom === str) {
      result = work;
    }
  }
  return result;
};

// portfolio creation du contenu des projets (si ils sont sous forme obj JS)
export const createProjectContent = (img) => {
  console.log(img);
  const work = $('.workContent');
  work.empty();
  // const div1 = $('<div class="col-12"></div>');
  // const div2 = $('<div class="col-12 col-xl-6"></div>');
  // const div3 = $('<div class="col-12 col-xl-6"></div>');
  work.append(`<h2>${img.nom}</h2>`);
  work.append(`<img src='${img.lien}'>`);
  work.append('<h3>Technologies utilisées</h3>');
  const ul = $('<ul></ul>');
  for (const techno of img.techno) {
    ul.append(`<li>${techno}</li>`);
  }
  work.append(ul);
  work.append('<h3>Descritpions</h3>');
  for (const p of img.desc) {
    work.append(`<p>${p}</p>`);
  }
  if (img.linGit) {
    const boutonProj = $('<div class="boutonProjet"></div>');
    boutonProj.append(`<a href='${img.linGit}' target='_blank'>Lien du projet</a>`);
    work.append(boutonProj);
  }
  // work.append(div1);
  // work.append(div2);
  // work.append(div3);
};

// portfolio img


export const getSrcImg = (objImg) => {
  for (const el of objImg.design) {
    const divD = $("<div class='grid-item'></div>");
    divD.css({ display: 'inline-block' });
    divD.append(`<img title="${el.nom}" src ="${el.lien}">`);
    $('#design').append(divD);
  }
  for (const el of objImg.programmation) {
    const divP = $("<div class='grid-item'></div>");
    divP.css({ display: 'inline-block' });
    divP.append(`<img title="${el.nom}" src ="${el.lien}">`);
    $('#programmation').append(divP);
  }
};

import $ from 'jquery';
import { arrImg } from '../data/data';

// trouver l'objet correspondant a la target dans la liste d'objet de data.js (arrImg)

export const getWork = (target) => {
  const str = $(target)[0].attributes.class.nodeValue;
  const idImg = $(target).parent()[0].id;
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
  const work = $('.workContent');
  work.empty();
  work.append(`<h2>${img.nom}</h2>`);
  work.append(`<img src='${img.lien}'>`);
  work.append('<h3>Technologies utilisées</h3>');
  work.append('<p>something</p>');
  work.append('<h3>Descritpions</h3>');
  work.append('<p>something</p>');
};

// portfolio img


export const getSrcImg = (objImg) => {
  for (const el of objImg.design) {
    $('#design').append(`<img class="${el.nom}" src ="${el.lien}">`);
  }
  for (const el of objImg.programmation) {
    $('#programmation').append(`<img class="${el.nom}" src ="${el.lien}">`);
  }
};

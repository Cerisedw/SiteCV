import $ from 'jquery';

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

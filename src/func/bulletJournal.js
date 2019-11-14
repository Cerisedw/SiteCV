import { jours, actObj } from '../data/data';


// mes fonctions

// pour ajouter l'event listener sur l'élément
export const changeOnClick = (el, color) => {
  el.addEventListener('click', (e) => {
    if (e.target.style.backgroundColor === '') {
      e.target.style.backgroundColor = color;
    } else {
      e.target.style.backgroundColor = null;
    }
  }, false);
};


// créer les tr et td
export const createAct = (arr, table) => {
  for (const el of arr) {
    const tr = document.createElement('tr');
    // tr.innerHTML = `<h4 style="margin:17px 10px;">${el.nom}</h4>`;
    const td1 = document.createElement('td');
    td1.innerHTML = `<h4 style="margin:17px 10px;">${el.nom}</h4>`;
    tr.appendChild(td1);

    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      td.style.backgroundColor = null;
      td.style.fontSize = '40px';
      changeOnClick(td, el.couleur);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
};

// créer les th
export const createTh = (arr, table) => {
  for (const el of arr) {
    const th2 = document.createElement('th');
    th2.innerText = el;
    table.appendChild(th2);
  }
};


// Test bullet journal
export const affBulletJournal = () => {
  const app = document.getElementById('Bullet');
  app.innerHTML = '';
  const titre = document.createElement('h3');
  titre.innerText = 'Bullet Journal';
  const table = document.createElement('table');
  const th = document.createElement('th');
  th.innerText = ' ';
  table.appendChild(th);
  createTh(jours, table);
  createAct(actObj, table);
  app.appendChild(titre);
  app.appendChild(table);
};

import $ from 'jquery';


export const changeLogoPika = () => {
  for (const logo of $('.logo')) {
    if ($(logo).children().attr('src') === './assets/images/pikaHead.png') {
      $(logo).children().attr('src', './assets/images/logo-bleu.png');
      $('#cvFR').attr('src', '.\\assets\\images\\CV\\cv-WAD-08-fr.jpg');
      $('#cvENG').attr('src', '.\\assets\\images\\CV\\v-WAD-08-en.jpg');
      const root = document.documentElement;
      root.style.setProperty('--secondaryColor', '#00B3CC');
    } else {
      $(logo).children().attr('src', './assets/images/pikaHead.png');
      $('#cvFR').attr('src', '.\\assets\\images\\CV\\cv-WAD-08-fr2.jpg');
      $('#cvENG').attr('src', '.\\assets\\images\\CV\\cv-WAD-08-en2.jpg');
      const root = document.documentElement;
      root.style.setProperty('--secondaryColor', '#ffc34d');
    }
  }
};


export const createBtnPika = () => {
  const nmbAlea = Math.floor(Math.random() * 3);
  if (nmbAlea === 0) {
    $('body').append(`
    <div id='btnPika'>
        <img src='.\\assets\\images\\pokeball.png'>
    </div>
  `);

    $('#btnPika').on('click', changeLogoPika);
  }
};

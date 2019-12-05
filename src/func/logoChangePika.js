import $ from 'jquery';


export const changeLogoPika = () => {
  for (const logo of $('.logo')) {
    if ($(logo).children().attr('src') === './assets/images/pikaHead.png') {
      $(logo).children().attr('src', './assets/images/logo-bleu.png');
    } else {
      $(logo).children().attr('src', './assets/images/pikaHead.png');
    }
  }
};


export const createBtnPika = () => {
  const nmbAlea = Math.floor(Math.random() * 3);
  console.log(nmbAlea);
  if (nmbAlea === 0) {
    $('body').append(`
    <div id='btnPika'>
        <img src='.\\assets\\images\\pokeball.png'>
    </div>
  `);

    $('#btnPika').on('click', changeLogoPika);
  }
};

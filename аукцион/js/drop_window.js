$(document).ready(function () {
    $('.serch__btn,.serh__header').click(function (event) {
      $('.serh__header').toggleClass('serch__activ');
      $('.serch__btn').toggleClass('serch__activ__drop');
      $('body').toggleClass('lock');
    });
    
  })
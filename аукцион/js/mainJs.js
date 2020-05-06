$(document).ready(function () {
  $('.drop').click(function (event) {
    $('.drop, .drop__menu').toggleClass('drop__menu__activ');
    $('body').toggleClass('lock');
  });

});

$(document).ready(function () {
  $('.serch__btn,.serh__header').click(function (event) {
    $('.serh__header').toggleClass('serch__activ');
    $('.serch__btn').toggleClass('serch__activ__drop');
    $('body').toggleClass('lock');
  });
  
})

$('.btns li').on('click', function() {
  $(this).siblings().removeClass('active');
  $(this).addClass('active');

  let tab = $(this).attr('data-link');
  $('.tabs div').removeClass('active');
  $(`#${tab}`).addClass('active');
})
$('.accordion h4').click(function() {
  $('.accordion p').stop().slideUp(300);
  $(this).next('p').stop().slideToggle(300);
  $(this).toggleClass('active');
  $(this).parent().siblings().children('h4').removeClass('active');
});
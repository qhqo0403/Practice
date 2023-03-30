$('.accordion h4').click(function() {
  $(this).next('p').stop().slideToggle(200);
  $(this).toggleClass('active');
});
$('.accordion p').click(function() {
  $(this).stop().slideUp(200);
  $(this).prev('h4').removeClass('active');
})
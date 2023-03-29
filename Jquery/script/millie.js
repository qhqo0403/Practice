$('.accordion h4').click(function() {
  $(this).next().stop().slideToggle(200);
});
$('.accordion p').click(function() {
  $(this).stop().slideUp(200);
})
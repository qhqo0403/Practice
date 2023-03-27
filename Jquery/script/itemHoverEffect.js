$('.size span, .colors span').click(function() {
  $(this).addClass('active');
  $(this).siblings('span').removeClass('active');
});
$('.like').click(function() {
  $(this).toggleClass('active');
})
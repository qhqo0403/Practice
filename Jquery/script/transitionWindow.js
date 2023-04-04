$('.open-btn').click(function() {
  $(this).addClass('active');
  $('.close-btn').addClass('active');
  $('.front').fadeOut();
  $('.back').fadeIn();
});
$('.close-btn').click(function() {
  $(this).removeClass('active');
  $('.open-btn').removeClass('active');
  $('.front').fadeIn();
  $('.back').fadeOut();
});


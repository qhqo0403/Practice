$('.nav li').mouseenter(function() {
  let changeBg = $(this).attr('data-img');

  $('.bg').css({
    'background-image': `url(${changeBg})`
  });
});
$('.nav li').mouseleave(function() {
  $('.bg').css({
    'background-image': '',
  });

});

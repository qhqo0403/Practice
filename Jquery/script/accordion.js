$('.title').click(function(){
  $(this).siblings('.title').removeClass('active');
  $(this).addClass('active');

  $(this).siblings('.description').stop().slideUp();
  $(this).next('.description').stop().slideDown();

  $('.imgbox img').fadeOut(200);
  setTimeout(() => {
    let img = $(this).attr('data-image');
    $('.imgbox img').attr('src', img).fadeIn(200);
  }, 300);
});
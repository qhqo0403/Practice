$('.title').click(function(){
  $(this).siblings('.title').removeClass('active');
  $(this).addClass('active');

  $(this).siblings('.description').stop().slideUp();
  $(this).next('.description').stop().slideDown();

  let img = $(this).attr('data-image');
  $('.imgbox img').attr('src', img);
});
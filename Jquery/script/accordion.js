$('.title').click(function(){
  $(this).addClass('active')
  $(this).siblings('.title').removeClass('active')
  $(this).siblings('.description').stop().slideUp()
  $(this).next().stop().slideDown()

  let dataImage = $(this).attr('data-image')
  $('.imgbox img').attr('src', dataImage)
})
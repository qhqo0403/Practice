$(function() {
  $('.imgbox img').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    let id = $(this).attr('data-link');
/*     $('.testimonial div').removeClass('active');
    $(`#${id}`).addClass('active'); */

    $('.testimonial div').fadeOut(200);
    $(`#${id}`).fadeIn(200);
  });
});
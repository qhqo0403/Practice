$(function() {
  $('.stars .fa').click(function() {
    $(this).addClass('active');
    $(this).prevAll().addClass('active');
    $(this).nextAll().removeClass('active');
    
    let index = $(this).index();
    const txt = $('.text');
    let img = `<img src="img/star-lv${index+1}.png">`;  
    console.log(img);

    if (index === 0) {
      txt.text('별로에요!');
      txt.prepend(img);
    } else if (index === 1) {
      txt.text('그냥그래요!');
      txt.prepend(img);
    } else if (index === 2) {
      txt.text('보통이에요!');
      txt.prepend(img);
    } else if (index === 3) {
      txt.text('좋아요!');
      txt.prepend(img);
    } else {
      txt.text('아주좋아요!');
      txt.prepend(img);
    }
  });
});
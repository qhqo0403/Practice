$('.login button').click(function() {
  let age = $('#age').val();

  if (age === '') {
    alert('나이를 입력해주세요.');
  } else if (age < 20) {
    alert('미성년자입니다');
  } else if (age >= 20) {
    alert('인증되었습니다.');
  } else {
    alert('나이를 숫자로 입력해주세요!');
  }

  $('#age').val('');
});
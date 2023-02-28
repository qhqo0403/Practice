const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// xhr 객체 생성
const xhr = new XMLHttpRequest();

// 객체 호출
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

//xhr.responseType = 'json'; 내장 기능을 이용해서 자동구문분석 가능함

xhr.onload = function() {
  //const listOfPosts = xhr.response;
  const listOfPosts = JSON.parse(xhr.response);
  //console.log(listOfPosts);
  for (const post of listOfPosts){
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').innerText = post.title;
    postEl.querySelector('p').innerText = post.body;
    listElement.append(postEl);
  }
}

// 요청 전송
xhr.send();
//console.log(xhr);

// 템플릿 사용하는거 한번 더 보기! 작동원리 정도 다시 이해해야함
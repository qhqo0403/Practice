const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('.posts');

let reFetch = false;

function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    // 헤더 구성 메서드
    //xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open(method, url);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else { // 서버에서 보낸 데이터가 잘못되었을 때 출력될 에러
        reject(new Error('Something went wrong!'));
      }
      //console.log(xhr);
    }
    // 오류 (요청을 전송했을 때에만 발생하는 에러로 서버측에서 발생하는 에러에는 실행되지 않음)
    xhr.onerror = function() {
      reject(new Error('Failed to send request!'));
    }

    // 요청 전송
    xhr.send(JSON.stringify(data));
  });
  return promise;
}

function fetchPost() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then(responseData => {
      const listOfPosts = JSON.parse(responseData);
      for (const post of listOfPosts){
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').innerText = post.title;
        postEl.querySelector('p').innerText = post.body;
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
      }
    })
    .catch(err => {
      console.log(err.message);
    })
}

// 만약 async await 을 사용한다면
/* async function fetchPost() {
  const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
  const listOfPosts = JSON.parse(responseData);
  for (const post of listOfPosts){
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector('h2').innerText = post.title;
    postEl.querySelector('p').innerText = post.body;
    listElement.append(postEl);
  }
} */

/* async  */function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  }

  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

// 버튼 클릭하면 전체 post 출력
fetchBtn.addEventListener('click', () => {
  if (!reFetch) {
    fetchPost();
  }
  reFetch = true;
});

// 새 글 등록하는 로직
form.addEventListener('submit', event => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector('#title').value;
  const enteredContent = event.currentTarget.querySelector('#content').value;

  createPost(enteredTitle, enteredContent);
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
})

// 삭제 요청
postList.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id;
    sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    event.target.closest('li').remove();
  }
})

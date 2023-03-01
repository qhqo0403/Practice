const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('.posts');

let reFetch = false;

function sendHttpRequest(method, url, data) {
  return fetch(url, { // fetch는 프로미스 기반 함수
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'applicaion/json'
    }
  }) 
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else { // fetch에서 오류를 해결하는 방법. 중첩 프로미스라 좋은 해결방안은 아님! return을 통해서 내부 프로미스와 외부 프로미스를 연결해줬음
        return response.json().then(errData => {
          console.log(errData);
          throw new Error('Something went wrong - server side.');
        });
      }
    });
}

function fetchPost() {
  sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then(responseData => {
      const listOfPosts = responseData;
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

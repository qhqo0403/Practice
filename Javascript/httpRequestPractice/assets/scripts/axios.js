const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('.posts');

let reFetch = false;

/* function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'applicaion/json'
    }
  }) 
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then(errData => {
          console.log(errData);
          throw new Error('Something went wrong - server side.');
        });
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error('Somthing went wrong!');
    })
}
 */ // axios를 사용하면 따로 에러에 대한 로직을 작성하지 않아도 됨

async function fetchPost() {
  try {
    const responseData = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(responseData);
    const listOfPosts = responseData.data;
    for (const post of listOfPosts){
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector('h2').innerText = post.title;
      postEl.querySelector('p').innerText = post.body;
      postEl.querySelector('li').id = post.id;
      listElement.append(postEl);
    }
  }
  catch(error) {
    alert(error.message);
    console.log(error.response);
  }
}


async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId
  }

  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
  console.log(response);
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
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    event.target.closest('li').remove();
  }
})

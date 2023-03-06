const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'lizzie';
const user = {
  nama: 'lizzie',
  age: 29,
  hobbies: ['Cooking', 'Sports']
}

storeBtn.addEventListener('click', () => {
  localStorage.setItem('uid', userId)
  localStorage.setItem('user', JSON.stringify(user));
});
retrBtn.addEventListener('click', () => {
  const extractedId = localStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if (extractedId) {
    console.log('Got the id - ' + extractedId);
  } else {
    console.log('Could not find id.');
  }
});
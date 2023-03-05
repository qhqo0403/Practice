const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

let db;
//데이터베이스 생성
const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onsuccess = function(event) {
  db = event.target.result;
}
// 데이터베이스가 생성되거나 버전이 변경되면 실행되는 함수로 최신 버전임
dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;
  
  // 객체 저장소 생성
  const objStore = db.createObjectStore('products', { keyPath: 'id' });
  
  // 객체 안에 데이터 초기화
  objStore.transaction.oncomplete = function(event) {
    //데이터 베이스와 객체 저장소 연결
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productsStore.add({
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'Luxury']
    });
  };
};

dbRequest.onerror = function(event) {
  console.log('ERROR!');
}

storeBtn.addEventListener('click', () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    id: 'p2',
    title: 'A Second Product',
    price: 122.99,
    tags: ['Expensive', 'Luxury']
  });
});

retrBtn.addEventListener('click', () => {
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');

  const request = productsStore.get('p2');
  
  request.onsuccess = function() {
    console.log(request.result);
  };
});
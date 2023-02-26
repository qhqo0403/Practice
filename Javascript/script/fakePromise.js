// callbback version
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout!');
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
}

fakeRequestCallback('nowhere.com/page1',
  function (response) {
    console.log('IT WORKED!');

    fakeRequestCallback('nowhere.com/page2',
      function (response) {
        console.log('IT WORKED! PAGE2');

        fakeRequestCallback('nowhere.com/page3',
          function (response) {
            console.log('IT WORKED! PAGE3');
          },
          function (err) {
            console.log('ERROR! PAGE3');
          }
        )

      },
      function (err) {
        console.log('ERROR! PAGE2');
      })
  },
  function (err) {
    console.log('ERROR!');
  });

// promise version
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout!');
      } else {
        resolve(`Here is your fate data from ${url}`);
      }
    }, delay);
  })
}

fakeRequestPromise('nowhere.com/page1')
  .then((data) => {
    console.log('IT WORKED! PAGE1');
    return fakeRequestPromise('nowhere.com/page2');
  })
  .then((data) => {
    console.log('IT WORKED! PAGE2');
    return fakeRequestPromise('nowhere.com/page3');
  })
  .then((data) => {
    console.log('IT WORKED! PAGE3');
  })
  .catch((err) => {
    console.log('A REQUEST FAILED')
  })

//JSON
const fs = require('fs');

let user;

const ParseJson = () => {
  fs.readFile('test.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    user = JSON.parse(data);
    console.log(user);
  });
};

// ParseJson();

const StringifyJson = () => {
  fs.readFile('test.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const updatedJson = JSON.stringify(user, null, 2);
    console.log(updatedJson);
  });
};

// StringifyJson();

//FETCH
//Работа с получением запроса
const getDataJson = () => {
  fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
};

const getFullData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log(response);
  });
};

// getFullData();

//Работа с отправкой запроса
const postData = (object) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(object),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// postData({
//   name: 'Andrey',
//   age: 20,
//   gender: 'male',
//   profession: ['frontend developer', 'backend developer'],
// });

//Когда будешь рассказывать про async поменяй тип функции на асинк
const getDataJsonAsync = () => {
  fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
};

const getDataJsonAsyncHandleError = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

const handleData = async (data) => {
  //...
};

// postData({ title: 'foo', body: 'bar', userId: 1 });

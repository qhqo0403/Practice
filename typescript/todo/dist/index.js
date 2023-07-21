"use strict";
const form = document.querySelector('form');
const input = document.querySelector('#todo-input');
const btn = document.querySelector('#btn');
const list = document.querySelector('#todolist');
;
const storedTodo = () => {
    const storedList = localStorage.getItem('todos');
    if (storedList === null)
        return [];
    const savedList = JSON.parse(storedList);
    const filteredList = savedList.filter(todo => todo.complated === false);
    return filteredList;
};
const saveTodo = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const todos = storedTodo();
// 따로 콜백함수를 만들 경우에는 이벤트 객체임을 적어줘야함
const submitHandler = (e) => {
    e.preventDefault();
    if (input.value.trim() === '')
        return;
    const newTodo = {
        text: input.value,
        complated: false
    };
    todos.push(newTodo);
    saveTodo();
    createTodo(newTodo);
    input.value = '';
};
const createTodo = (todo) => {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.complated;
    checkbox.addEventListener('change', () => {
        todo.complated = checkbox.checked;
        saveTodo();
    });
    newLi.append(checkbox);
    newLi.append(todo.text);
    list.append(newLi);
};
todos.forEach(createTodo);
form.addEventListener('submit', submitHandler);
/*
// 이벤트리스너에서 콜백함수로 사용하는 e 가 이벤트 객체임을 인식함
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("submit!");
});
 */

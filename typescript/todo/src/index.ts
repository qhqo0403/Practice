const form = document.querySelector('form')!;
const input = document.querySelector('#todo-input')! as HTMLInputElement;
const btn = document.querySelector('#btn')! as HTMLButtonElement;
const list = document.querySelector('#todolist')!;

interface Todo {
  text: string;
  complated: boolean;
};

const storedTodo = (): Todo[] => {
  const storedList = localStorage.getItem('todos');
  if (storedList === null) return [];
  const savedList: Todo[] = JSON.parse(storedList);
  const filteredList = savedList.filter(todo => todo.complated === false);

  return filteredList;
};

const saveTodo = (): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

const todos: Todo[] = storedTodo();

// 따로 콜백함수를 만들 경우에는 이벤트 객체임을 적어줘야함
const submitHandler = (e: SubmitEvent): void => {
  e.preventDefault();
  if (input.value.trim() === '') return;
  const newTodo: Todo = {
    text: input.value,
    complated: false
  };
  todos.push(newTodo);

  saveTodo();
  createTodo(newTodo);
  input.value = '';
};

const createTodo = (todo: Todo): void => {
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

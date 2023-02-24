const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');

const listDraggable = () => {
  const lists = document.querySelectorAll('li');
  lists.forEach(each => {
    each.setAttribute('draggable', true);
    each.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this);
      event.dataTransfer.effectAllowed = 'move';
    });
  })
}
listDraggable();	

const connectDroppable = (list) => {
  list.addEventListener('dragenter', event => {
    if (event.dataTransfer.types[0] === 'text/plain'){
      list.parentElement.classList.add('droppable');
      event.preventDefault();
    }
  });

  list.addEventListener('dragover', event => {
    event.preventDefault();
  });

  list.addEventListener('dragleave', function(event) {
    if (event.relatedTarget.closest(document.getElementById(list)) !== list){
      list.parentElement.classList.remove('droppable');
    }
  });
  
/*     list.addEventListener('drop', event => {
    const listId = event.dataTransfer.getData('text/plain');
    if (this.projects.find(p => p.id === prjId)) {
      list.parentElement.classList.remove('droppable');
      return;
    }
    document.getElementById(prjId).querySelector('button:last-of-type').click();
    list.parentElement.classList.remove('droppable');
  }); */
}

connectDroppable(list1);
connectDroppable(list2);
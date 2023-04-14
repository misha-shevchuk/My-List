const input = document.querySelector('.input__field');
const button = document.querySelector('.input__button');
const list = document.querySelector('.toDoList__list');
const deleteButton = document.querySelector('.list__button');
const listplaceholder = document.querySelector('.list__placeholder');



button.addEventListener('click', () => {
  if (input.value.length > 0) {
    listplaceholder.style.display = 'none';

    const li = document.createElement('li');
    li.className = 'list__item'
    li.innerText = input.value;
    li.contentEditable = true;
    input.value = '';
    list.appendChild(li);

    const doneButton = document.createElement('button');
    doneButton.className = 'list__doneButton'
    li.appendChild(doneButton);
    doneButton.contentEditable = false;

    doneButton.addEventListener('click', () => {
      if (li.className === 'list__item') {
        li.className ='list__item list__item--done'
      } else {
        li.className = 'list__item';
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'list__deleteButton'
    li.appendChild(deleteButton);
    deleteButton.contentEditable = false;

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      const numberOfTasks = document.querySelector('.list__item')

      if (numberOfTasks === null) {
        listplaceholder.style.display = 'block';
      }
    });
  }
});

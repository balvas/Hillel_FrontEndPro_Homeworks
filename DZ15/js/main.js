function Tasks(_formInput, _todosWrapper) {
   this.todosWrapper = document.querySelector(_todosWrapper);
   this.addItem = (event) => {
      event.preventDefault();
      this.input = event.target.querySelector(_formInput);
      this.todosWrapper.insertAdjacentHTML('beforeend', this.createTemplate(this.input.value));
      this.input.value = '';
      document.querySelectorAll('.js--delete').forEach(item => {
         item.addEventListener('click', this.delete);
      })
      document.querySelectorAll('.js--done').forEach(item => {
         item.addEventListener('click', this.done);
      })
   }
   this.delete = function (event) {
      event.target.closest('.js--todo-item').remove();
   }
   this.done = function (event) {
      parent = event.target.closest('.js--todo-item');
      parent.querySelector('.js--description').classList.add('todo-item--checked');
      console.log(event.target);

   }
   this.createTemplate = function (description) {
      return `
           <div class="todo-item js--todo-item">
                   <div class="todo-item__description js--description">${description}</div>
                   <button class="todo-item__done js--done">Done</button>
                   <button class="todo-item__delete js--delete">Delete</button>
           </div> 
       `
   }
}
const task = new Tasks(
   '.js--form__input',
   '.js--todos-wrapper',
);

document.querySelector('.js--form').addEventListener('submit', task.addItem);


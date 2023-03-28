function UserTable({ form, content, userInfo, addButton }) {
    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addUser(
                form.elements['name'].value,
                form.elements['phone'].value,
                form.elements['age'].value
            )
        })
        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })

        this.loadUsers();
    }
    this.addUser = function (name, phone, age) {
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            phone,
            age,
        }
        this.userTemplate(user);
        form.reset();
        form.classList.remove('open');
        const currentUsers = JSON.parse(localStorage.getItem('users')) || [];
        currentUsers.push(user);
        localStorage.setItem('users', JSON.stringify(currentUsers))
    }
    this.loadUsers = function () {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            users.forEach(user => this.userTemplate(user))
        }
    }
    this.userTemplate = function (user) {
        const newItem = document.createElement('tr');
        newItem.classList.add('js--item');
        newItem.dataset.id = user.id;
        newItem.insertAdjacentHTML('beforeend', (
            `<td>${user.id}</td>` +
            `<td>${user.name}</td>` +
            `<td>${user.phone}</td>` +
            `<td>${user.age}</td>` +
            `<td><button class="btn js--view">View</button><button class="btn js--edit">Edit</button><button class="btn js--delete">Delete</button></td>`
        ))

        newItem.querySelector('.js--view').addEventListener('click', this.viewItem);
        newItem.querySelector('.js--edit').addEventListener('click', this.editItem);
        newItem.querySelector('.js--delete').addEventListener('click', this.deleteItem);
        content.appendChild(newItem);
    }



    this.viewItem = function (event) {
        const currentItem = this.closest('.js--item');
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const itemToView = currentUsers.filter(item => item.id === +currentItem.dataset.id);
        document.querySelector('.js--user').textContent = `${JSON.stringify(itemToView)}`;
    }

    this.editItem = function (event) {
        const currentItem = this.closest('.js--item');
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const itemToEdit = currentUsers.filter(item => item.id === +currentItem.dataset.id)[0];

        itemToEdit.name = prompt('Введите имя', itemToEdit.name);
        itemToEdit.phone = prompt('Введите имя', itemToEdit.phone);
        itemToEdit.age = prompt('Введите имя', itemToEdit.age);
        while (currentItem.firstChild) {
            currentItem.removeChild(currentItem.firstChild);
        }

        currentItem.insertAdjacentHTML('beforeend', (
            `<td>${itemToEdit.id}</td>` +
            `<td>${itemToEdit.name}</td>` +
            `<td>${itemToEdit.phone}</td>` +
            `<td>${itemToEdit.age}</td>` +
            `<td><button class="btn js--view">View</button><button class="btn js--edit">Edit</button><button class="btn js--delete">Delete</button></td>`
        ))

        localStorage.setItem('users', JSON.stringify(currentUsers));
    }

    this.deleteItem = function (event) {
        const currentItem = this.closest('.js--item');
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const currentUsersWithoutItem = currentUsers.filter(item => item.id !== +currentItem.dataset.id);
        currentItem.remove();
        localStorage.setItem('users', JSON.stringify(currentUsersWithoutItem));
    }
}


(new UserTable({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();

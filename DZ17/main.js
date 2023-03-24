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
        content.insertAdjacentHTML('beforeend', (
            `<tr>` +
            `<td>${user.id}</td>` +
            `<td>${user.name}</td>` +
            `<td>${user.phone}</td>` +
            `<td>${user.age}</td>` +
            `<td><button class="btn js--view">View</button><button class="btn js--edit">Edit</button><button class="btn js--delete">Delete</button></td>` +
            `</tr>`
        ))

        document.querySelectorAll('.js--view').forEach(item => {
            item.addEventListener('click', this.view);

        })
        document.querySelectorAll('.js--edit').forEach(item => {
            item.addEventListener('click', this.edit);

        })
        document.querySelectorAll('.js--delete').forEach(item => {
            item.addEventListener('click', this.delete);

        })
    }



    this.view = function (event) {
        let currentId = event.target.closest('tr').firstChild.textContent;
        console.log(currentId);
        const users = JSON.parse(localStorage.getItem('users'));
        for (let i = 0; i < users.length; i++) {
            // console.log(users[i]['id']);
            if (users[i]['id'] == currentId) {
                console.log(document.querySelector('.js--user'));
                document.querySelector('.js--user').textContent = `${JSON.stringify(users[i])}`;
                // localStorage.removeItem(i);
                console.log(users[i]);
            }
        }
    }

    this.edit = function (event) {
        let currentId = event.target.closest('tr').firstChild.textContent;
        console.log(currentId);
        const users = JSON.parse(localStorage.getItem('users'));
    }

    this.delete = function (event) {
        let currentId = event.target.closest('tr').firstChild.textContent;
        console.log(currentId);
        const users = JSON.parse(localStorage.getItem('users'));
        // const index = users.indexOf(currentId);
        // console.log(users);
        // console.log(index);
        for (let i = 0; i < users.length; i++) {
            if (users[i]['id'] == currentId) {
                let currentUsers = users.splice(i, 1);
                console.log(currentUsers);
                localStorage.setItem('users', JSON.stringify(currentUsers));

            }


            // console.log(users[i]);
        }
    }



        (new UserTable({
            form: document.querySelector('.js--form'),
            userInfo: document.querySelector('.js--user'),
            addButton: document.querySelector('.js--add'),
            content: document.querySelector('.js--content'),
        })).init();

// let viewButton = document.querySelectorAll('.js--view');
// console.log(viewButton);
// document.querySelectorAll('.js--view').forEach(item => {
//     item.addEventListener('click', viewRowInCode(event));
// })

// function viewRowInCode(event) {
//     let currentId = event.target.closest('tr').firstChild.textContent;
// }
// viewButton.addEventListener('click', function () {
//     let currentId = viewButton.closest('tr').firstChild.textContent;
//     console.log(currentId);
//     const users = JSON.parse(localStorage.getItem('users'));
//     for (let i = 0; i < users.length; i++) {
//         console.log(users[i]);
//     }

// })

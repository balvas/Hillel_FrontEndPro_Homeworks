function StudentsTable({ form, content, userInfo, addButton }) {
    if (localStorage.getItem("users") === null) {
        const students = [
            {
                id: 1,
                name: 'John',
                surname: 'Doe',
                dateofbirth: '1999-01-01',
                age: 0,
                attendanceArray: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,],
                estimatesArray: [100, 100, 100],
                academicPerformance: ''
            },
            {
                id: 2,
                name: 'George',
                surname: 'Smith',
                dateofbirth: '2000-01-01',
                age: 0,
                attendanceArray: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,],
                estimatesArray: [100, 50, 70],
                academicPerformance: ''
            },
            {
                id: 3,
                name: 'John',
                surname: 'Smith',
                dateofbirth: '1995-01-01',
                age: 0,
                attendanceArray: [false, false, false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,],
                estimatesArray: [100, 50, 70],
                academicPerformance: ''
            }
        ];
        const studentsWithAge = students.map((student) => {
            return {
                ...student,
                age: calculateAge(student.dateofbirth),
                academicPerformance: getAcademicPerformance(student.estimatesArray)
            };
        });
        localStorage.setItem('users', JSON.stringify(studentsWithAge));
    }

    this.init = function () {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addStudent(
                form.elements['name'].value,
                form.elements['surname'].value,
                form.elements['dateofbirth'].value
            )
        })
        addButton.addEventListener('click', function () {
            form.reset();
            form.classList.add('open');
        })
        this.loadUsers();
    }
    function calculateAge(dateOfBirth) {
        const dob = new Date(dateOfBirth);
        const now = new Date();
        let age = now.getFullYear() - dob.getFullYear();
        const monthDiff = now.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    }
    function getAcademicPerformance(estimatesArray) {
        return estimatesArray.reduce((a, b) => (a + b)) / estimatesArray.length;
    }
    this.addStudent = function (name, surname, dateofbirth) {
        const age = calculateAge(dateofbirth);
        const user = {
            id: Math.floor(Math.random() * 100),
            name,
            surname,
            dateofbirth,
            age,
            attendanceArray: new Array(25),
            estimatesArray: [],
            academicPerformance: ''

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
            `<td>${user.name} ${user.surname}</td>` +
            `<td>${user.age}</td>` +
            `<td><button class="btn js--estimates">Add estimates</button></td>` +
            `<td><button class="btn js--present">Present</button><button class="btn js--absent">Absent</button></td>` +
            `<td><button class="btn js--summary">View summary</button></td>`
        ))
        const addEstimatesButton = newItem.querySelector('.js--estimates');
        const trueButton = newItem.querySelector('.js--present');
        const falseButton = newItem.querySelector('.js--absent');
        const summaryButton = newItem.querySelector('.js--summary');
        addEstimatesButton.addEventListener('click', () => this.addEstimates(user.id));
        trueButton.addEventListener('click', () => this.present(user.id));
        falseButton.addEventListener('click', () => this.absent(user.id));
        summaryButton.addEventListener('click', () => this.summary(user.id,));
        content.appendChild(newItem);
    }

    this.addEstimates = function (userId) {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const itemToView = currentUsers.find(item => item.id === userId);
        const input = prompt("Enter a list of numbers separated by commas:");
        const newEstimatesArray = input.split(",").map(num => parseFloat(num.trim()));
        itemToView.estimatesArray = [...itemToView.estimatesArray, ...newEstimatesArray];
        itemToView.academicPerformance = itemToView.estimatesArray.reduce((a, b) => (a + b)) / itemToView.estimatesArray.length;
        localStorage.setItem('users', JSON.stringify(currentUsers));
    };
    this.present = function (userId) {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const itemToView = currentUsers.find(item => item.id === userId);
        if (itemToView.attendanceArray.includes(null)) {
            for (let i = 0; i < 25; i++) {
                if (itemToView.attendanceArray[i] === null) {
                    itemToView.attendanceArray[i] = true;
                    localStorage.setItem('users', JSON.stringify(currentUsers));
                    break;
                }
            }
        }
        else {
            alert('All visits counted!');
        }

    };
    this.absent = function (userId) {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const itemToView = currentUsers.find(item => item.id === userId);
        if (itemToView.attendanceArray.includes(null)) {
            for (let i = 0; i < 25; i++) {
                if (itemToView.attendanceArray[i] === null) {
                    itemToView.attendanceArray[i] = false;
                    localStorage.setItem('users', JSON.stringify(currentUsers));
                    break;
                }
            }
        }
        else {
            alert('All visits counted!');
        }
    };
    this.summary = function (userId) {
        const currentUsers = JSON.parse(localStorage.getItem('users'));
        const itemToView = currentUsers.find(item => item.id === userId);
        const trueCount = itemToView.attendanceArray.filter(Boolean).length / itemToView.attendanceArray.length;
        alert(`Your Academic performance is ${itemToView.academicPerformance} \n And your Visit rate is ${trueCount}`);
        if (trueCount < 0.9 && itemToView.academicPerformance < 90) {
            alert('Редиска!');
        } else if (trueCount < 0.9 || itemToView.academicPerformance < 90) {
            alert('Добре, але можна краще!');
        } else {
            alert('Молодець!');
        }
    };

}


(new StudentsTable({
    form: document.querySelector('.js--form'),
    userInfo: document.querySelector('.js--user'),
    addButton: document.querySelector('.js--add'),
    content: document.querySelector('.js--content'),
})).init();

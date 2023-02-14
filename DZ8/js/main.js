function removeElement() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let itemToDelete = prompt(`Оберіть з масиву ${array} елемент на видалення`);

    function arrayRemove(arr, value) {
        return arr.filter(function (item) {
            return item != value;
        });
    }
    alert(`Новий масив ${arrayRemove(array, itemToDelete)}`);
}

function functionTwo() {
    const array = [1, true, 'string1', 4, 'string2', 6, 7, 8, 9];
    const filterArray = [];
    for (let item of array) {
        if (typeof item === 'number') {
            filterArray.push(item);
        }
    }
    let sum = filterArray.reduce(function (a, b) {
        return a + b;
    });
    let averageOfNumbers = sum / filterArray.length;
    console.log(`З масиву [${array}] вибрані числа у новий масив [${filterArray}]`)
    console.log(`Cереднє арифметичне масиву [${filterArray}] дорівнює ${averageOfNumbers}`)
}

function functionThree() {
    let entireString = prompt('Введіть строку', '');
    let entireSymbols = prompt('Введіть символи для видалення зі строки через кому', '');
    let symbolsArray = entireSymbols.split(",").map(item => item.trim());
    symbolsArray.forEach(item => {
        re = new RegExp(item, 'g');
        entireString = entireString.replace(re, '');
    });
    alert(`Нова строка ${entireString}`);
}

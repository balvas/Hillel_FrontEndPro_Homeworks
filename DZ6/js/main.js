function functionOne() {
    let myString = '';
    for (let i = 20; i <= 30; i += 0.5) {
        myString = myString + i + ' ';
    }
    console.log(myString);
}

function functionTwo() {
    const exchangeRate = 27;
    for (let i = 10; i <= 100; i += 10) {
        console.log(`${i} доларів коштують ${i * exchangeRate}`);
    }
}

function functionTree() {
    let inputNumber = +prompt('Введіть ціле число');
    let myString = '';
    for (let i = 1; i <= 100; i++) {
        if (i ** 2 <= inputNumber) {
            myString = myString + i + ' ';
        } else {
            break;
        }
    }
    console.log(myString);
}

function functionFour() {
    let inputNumber = +prompt('Перевірка чи є число простим. Введіть ціле число');
    if (inputNumber < 2) {
        console.log('Число повинно бути більше 1');
        return;
      } else if (inputNumber === 2) {
        console.log('Просте число');
        return;
      }
    
      let i = 2;
      const limit = Math.sqrt(inputNumber);
      while (i <= limit) {
        if (inputNumber % i === 0) {
            console.log('Складене число');
            return;
        }
        i +=1;
      }
      
      console.log('Просте число');
      return;
}

function functionFive() {
    let inputNumber = +prompt('Перевірка чи можна одержати число шляхом зведення числа 3 у деякий ступінь. Введіть ціле число');
    for (let i = 1; i < 256; i++ ) {
        if (3 ** i === inputNumber) {
            console.log(`Число ${inputNumber} можна одержати шляхом зведення числа 3 у ${i} ступінь.`);
            return;
        }
    }
    console.log(`Число ${inputNumber} не можна одержати шляхом зведення числа 3 у будь-який цілий ступінь.`);
}
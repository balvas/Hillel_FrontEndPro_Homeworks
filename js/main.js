function getSum() {
    let total = 0;
    return function returnTotal(number) {
        return total += number;
    }
}

let sum = getSum();
console.log(sum(3));
console.log(sum(5));
console.log(sum(30));
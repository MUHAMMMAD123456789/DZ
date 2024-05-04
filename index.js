// const n = parseInt(prompt('Введите номер числа Фибоначчи: '));

// let fib = [0, 1];


// while (fib.length <= n) {

//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
// }

// console.log(`Число Фибоначчи под номером ${n}: ${fib[n]}`);









function broke(a, b) {

    let x = a / 100;
    let y = b / x

    return y;
}

let a = prompt('total cars');
let b = prompt('broke cars');
let result = broke(a, b);
console.log(`${result}%`);

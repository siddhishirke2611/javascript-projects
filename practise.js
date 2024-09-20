//#1 print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//#2 Print the odd numbers less than 100
for (let j = 1; j <= 100; j += 2) {
    console.log(j);
}

//#3 Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
    let row = "7 * " + i + " = " + 7 * i;
    console.log(row);
}

//#4 Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    printTable(i);
    console.log("");
}

function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        let row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}

//#5 Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

//#6 Calculate 10
let prod = 1;
for (let i = 1; i <= 10; i++) {
    prod *= i;
}
console.log(prod);

//#7 Calculate the sum of odd numbers greater than 10 and less than 30

let sum1 = 0;
for (let i = 11; i <= 30; i += 2) {
    sum1 += i;
}
console.log(sum1);

//#8 Calculate the sum of numbers in an array of numbers

function sumArray(ar) {
    let sum2 = 0;
    for (let i = 0; i < ar.length; i++) {
        sum2 += ar[i];
    }
    return sum2;
}
let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum2 = sumArray(ar);
console.log(sum2);

//#9 Calculate the average of the numbers in an array of numbers

function averageArray(ar) {
    let n = ar1.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += ar1[i];
    }
    return sum / n;
}
let ar1 = [1, 3, 9, 15, 90];
let avg = averageArray(ar1);
console.log("Average: ", avg);

// #10 Print the first 10 Fibonacci numbers without recursion

let f0 = 0;
console.log(f0);

let f1 = 1;
console.log(f1);

for (let i = 2; i < 10; i++) {
    let fi = f1 + f0;
    console.log(fi);

    f0 = f1;
    f1 = fi;
}

// #11 Create a function that will find the nth Fibonacci number using recursion
function findFibonacci(n) {
    if (n == 0)
        return 0;

    if (n == 1)
        return 1;

    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n = findFibonacci(10);
console.log(n);


// #12 Calculate the sum of digits of a positive integer number

function sumDigits(n) {
    let s = n.toString();
    let sumint = 0;

    for (let char of s) {
        let digit = parseInt(char);
        sumint += digit;
    }

    return sumint;
}

let sumint = sumDigits(123589);
console.log("Sum: ", sumint);

//#13: Rotate an array to the left 1 position

let ary = [1, 2, 3];
rotateLeft(ary);
console.log(ary);

function rotateLeft(ary) {
    let first = ary.shift();
    ary.push(first);
}

//#14 Rotate an array to the right 1 position

let aryy = [1, 2, 3];
rotateRight(aryy);
console.log(aryy);

function rotateRight(aryy) {
    let last = aryy.pop();
    aryy.unshift(last);
}




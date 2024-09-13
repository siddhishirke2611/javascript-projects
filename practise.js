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
    for (let i = 0; i < ar.length; i++)
    {
        sum2 += ar[i];
    }
    return sum2;
}
let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum2 = sumArray(ar);
console.log(sum2);

//#9 Calculate the average of the numbers in an array of numbers

// ------------------Print no. from 1 to 10------------------------------------

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//-----------------Print even numbers between 1 to 20---------------------

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// --------------Print odd numbers between 1 to 20----------------

for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// -------------Find the sum of numbers from 1 to 100---------------

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log(sum);

// ---------------Print the multiplication table of any number-------------------

let table = prompt("enter no.");
for (let i = 1; i <= 10; i++) {
  console.log(table, "*", i, "=", table * i);
}

// -----------------Count the number of digits in a given number-----------------------

let count = prompt("enter nunber");
console.log(count.length);

// -----------------Find the largest of three numbers-----------------------

a = 20;
b = 12;
c = 4;

if (a > b && a > c) {
  console.log(`${a} is the greatest`);
} else if (b > a && b > c) {
  console.log(`${b} is the greatest`);
} else {
  console.log(`${c} is the greatest`);
}

// ---------------Check if a number is positive, negative, or zero-----------------

let num = prompt("enter number");
if (num > 0) {
  console.log("Positive no.");
} else if (num < 0) {
  console.log("Negative no.");
} else {
  console.log("No. is 0");
}

// ----------------Check if a number is divisible by both 3 and 5------------------

let num = prompt("enter no.");
if (num % 3 == 0 && num % 5 == 0) {  
  console.log(num, "is divisible by both 3 and 5");
} else {
  console.log(num, " is not divisible");
}

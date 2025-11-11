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

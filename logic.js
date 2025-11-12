// 🟢 Level 1: Basics (Build Foundation)
// ------------------Print no. from 1 to 10------------------------------------

for (let i = 1; i <= 10; i++) {
  // Start at 1; keep looping while i <= 10; increase i by 1 each time
  console.log(i);
}

// -----------------Print even numbers between 1 to 20---------------------

for (let i = 1; i <= 20; i++) {
  // i % 2 returns remainder after division by 2; even numbers have remainder 0
  if (i % 2 == 0) {
    console.log(i);
  }
}

// --------------Print odd numbers between 1 to 20----------------

for (let i = 1; i <= 20; i++) {
  // Odd numbers have remainder 1 when divided by 2 (non-zero remainder)
  if (i % 2 != 0) {
    console.log(i);
  }
}

// -------------Find the sum of numbers from 1 to 100---------------

let sum = 0;
for (let i = 1; i <= 100; i++) {
  // Accumulate running total: sum = previous sum + current i
  sum = sum + i;
}

// After the loop, sum holds 1 + 2 + ... + 100
console.log(sum);

// ---------------Print the multiplication table of any number-------------------

let table = prompt("enter no.");
for (let i = 1; i <= 10; i++) {
  // prompt returns a string; using * coerces to number implicitly
  // e.g., for table = "5": 5 * 1, 5 * 2, ... 5 * 10
  // Note: if user types a non-numeric value, table * i becomes NaN (Not-a-Number)
  console.log(table, "*", i, "=", table * i);
}

// -----------------Count the number of digits in a given number-----------------------

let count = prompt("enter nunber");
// prompt returns a string; the length property gives the count of characters
// For negative numbers like "-123", length counts the minus sign too (4)
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
// Note: a, b, c are assigned without let/const, which creates globals in non-strict mode
// If two numbers are equal and greatest, this logic falls through to the final else
// Example: a=20, b=20, c=4 -> prints c is the greatest (not mathematically accurate for ties)

// ---------------Check if a number is positive, negative, or zero-----------------

let num = prompt("enter number");
// Comparison with > or < will coerce the input string to a number
if (num > 0) {
  console.log("Positive no.");
} else if (num < 0) {
  console.log("Negative no.");
} else {
  console.log("No. is 0");
}
// If the input is not numeric (e.g., "abc"), comparisons yield false and else prints "No. is 0"
// To be strict, you could convert: const n = Number(num); and check Number.isNaN(n)

// ----------------Check if a number is divisible by both 3 and 5------------------

// Note: redeclaring let num in the same scope would cause an error in strict setups.
// Using a second prompt but same variable name here relies on non-strict behavior; consider renaming if needed.
let num = prompt("enter no.");
if (num % 3 == 0 && num % 5 == 0) {
  console.log(num, "is divisible by both 3 and 5");
} else {
  console.log(num, " is not divisible");
}
// Using && means both conditions must be true (divisible by 3 AND by 5)
// Using % with a string will coerce to number; non-numeric input gives NaN and conditions become false

// ----------------Print all numbers between 1 and 100 that are divisible by 7-----------------

for (let i = 1; i <= 100; i++) {
  if (i % 7 == 0) {
    console.log(i);
  }
}

// -----------Count how many numbers between 1–100 are even-------------

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

console.log(count);

// --------Find the sum of even and odd numbers separately (1–100)---------

let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even = even + i;
  } else if (i % 2 != 0) {
    odd = odd + i;
  }
}

console.log(`even sum ${even}`);
console.log(`odd sum ${odd}`);

// --------Reverse a number (e.g., 123 → 321)---------

let reverse = "";
for (let i = 3; i >= 1; i--) {
  reverse = reverse + i;
}

console.log(reverse);

// ---------Find the sum of digits of a number----------

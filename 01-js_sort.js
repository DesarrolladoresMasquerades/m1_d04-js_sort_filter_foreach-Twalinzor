// Class code examples

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

console.log("BEFORE: ", numbers);

numbers.sort();

console.log("AFTER: ", numbers);

console.log(typeof numbers[0]); // Elements stay as numbers

console.log(numbers === numbers.sort()); // Array stays in the same "box"

// Passing sorting criteria using a function

// Rules are that TWO ELEMENTS will be given to your function and your function must return -1, 0 or 1, according to whether element 1 is smaller, equal or greater than element 2

function sortMyNumbers(element1, element2) {
  if (element1 > element2) return -1;
  if (element1 === element2) return 0;
  if (element1 < element2) return 1;
}

function quickSort(el1, el2) {
  return el1 - el2;
}

const sortedNumbers = numbers.sort(quickSort);

console.log("sortedNumbers: ", sortedNumbers);

const students = [
  { firstName: "John", lastName: "Carr", age: 34 },
  { firstName: "Leonardo", lastName: "Di Vittorio", age: 21 },
  { firstName: "Sarah", lastName: "O'Connor", age: 45 },
];

function sortStudentsAge(stud1, stud2) {
  if (stud1.age < stud2.age) return -1;
  if (stud2.age === stud2.age) return 0;
  if (stud3.age > stud3.age) return 1;
}

function sortStudentsAgeQuick(stud1, stud2) {
  return parseInt(stud1.age) - parseInt(stud2.age);
}

console.log("students by age: ", students.sort(sortStudentsAge));

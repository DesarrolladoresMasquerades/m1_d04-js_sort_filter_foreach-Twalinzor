// Class code examples

const numbers = [
  1, 60, 112, 123, 100, 99, 73, 35, 22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18,
];

const filterEvenNumbers = function (element) {
  if (element % 2 === 0) return true;
  else return false;
};

const filterOddNumbers = function (element) {
  if (element % 2 !== 0) return true;
  else return false;
};

const evenNumbers = numbers.filter(filterEvenNumbers);

const oddNumbers = numbers.filter(filterOddNumbers);

console.log(numbers, evenNumbers, oddNumbers);

console.log(numbers === evenNumbers);
console.log(numbers === oddNumbers);
console.log(evenNumbers === oddNumbers);

const filteredLessOneHundred = function (element) {
  return element < 100;
};

const filteredGreaterOneHundred = function (element) {
  return element > 100;
};

const lessThanOneHundred = numbers.filter(filteredLessOneHundred);

const biggerThanOneHundred = numbers.filter(filteredGreaterOneHundred);

console.log(lessThanOneHundred);
console.log(biggerThanOneHundred);

const students = [
  { name: "Rafa", color: "Blue", age: 24 },
  { name: "Elise", color: "Pink", age: 21 },
  { name: "Bodei", color: "Yellow", age: 31 },
  { name: "Jorge", color: "Red", age: 18 },
];

const greaterThan21 = function (students) {
  return students.age >= 21;
};

const drinkingStudents = students.filter(greaterThan21);

const pinkStudents = function (students) {
  return students.color.toLowerCase() === "pink";
};

const pinkedStudents = students.filter(pinkStudents);

console.log(pinkedStudents);

function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHourstoMinutes(hours) {
  return hours * 60;
}
var minutes = convertHourstoMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var name = getGreeting('World');
console.log(name);

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}
var multiplication = addAndMultiplyBy5(10, 5);
console.log(multiplication);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}
var division = multiplyAndDivideBy5(35, 10);
console.log(division);

function subtractTwoNumbers(x, y) {
  return (x - y);
}
var subtraction = subtractTwoNumbers(22, 7);
console.log(subtraction);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullname = getFullName('Juan', 'Ramirez');
console.log(fullname);

function cube(number) {
  return number * number * number;
}
var exponent = cube(5);
console.log(exponent);

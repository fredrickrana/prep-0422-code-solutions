var person = {
  firstName: 'Buzz',
  lastName: 'Lightyear',
  hobby: 'tennis'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: \n" + fullName);

person['job'] = 'astronaut';
console.log("The person's current job is: \n" + person.job);

person['previousJob'] = 'pilot';
console.log("The person's previous job is: \n" + person.previousJob);

console.log(person);

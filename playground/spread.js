// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jean', 'Quentin'];
// var groupB = ['Kevin', 'lalaland'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

// Hi Andrew, you are 25

var names = ['Mike', 'Ben'];
var final = ['Camille', ...names];

for ( i=0; i != final.length; i++ ) {
  console.log('Hi', final[i]);
}

final.forEach(function (name) {
  console.log('Hi' + name);
});

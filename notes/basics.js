// Objects
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.age; // this. has to be here
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();

console.log(val);

// array of objects
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 40}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}

// Functions

// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe'){
  return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet());

// FUNCTION EXPRESIONS
const square = function(x = 3){
  return x*x;
};
console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs : declare and run at the same time
(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello '+ name);
})('Brad');

// PROPERTY METHODS: function inside of an object
const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){ // function declared outside the object for that object
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();

// LOOP
// for each loop (arrays)

const cars = ['Ford', 'Alfa', 'Citroen']

cars.forEach(function(car){
  console.log(car);
});

// MAP
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

// FOR IN LOOP
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}

// WINDOW OBJECT
alert('hello')
window.outerHeight;
window.innerHeight;
window.outerWidth;
window.innerWidth;

window.location; // location object
console.log(window.location.hostname)
console.log(window.location.search) // search parameters

window.location.href = 'https://google.com' // redirect
window.location.reload() // to reload the page

// history object
window.history.go(-1) // will go one site back
window.history.length

// navigator object - has to do with actual browser, so chrome, etc.
window.navigator
window.navigator.appVersion
window.navigator.language
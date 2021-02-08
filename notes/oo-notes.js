// constructor
function Person(firstName, lastName, dob) {
  this.firstName = name // 'this' is the CURRECT instance of an object
  this.lastName = lastName
  this.birthday = new Date(dob)
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

console.log(this) // 'this' in the global scope pertains to the window object

const brad = new Person('Brad', 'Boomer', '9-10-1960')
console.log(brad.firstName) // just get the name
console.log(brad.calculateAge())

// built in constructors: primitive types (strings, numbers, booleans) can be created as objects instead of primitives, but it's not really common

const name2 = new String('Jeff') // name2 is an object, not a value
const num2 = new Number(5)
const bool2 = new Boolean(true)
const getSum2 = new Function('x', 'y', 'return 1 + 1')
const john2 = new Object({ name: 'John' })
const arr2 = new Array(1, 2, 3, 4)
const re2 = new RegExp('\\w+')

// PROTOTYPES
// each object in JS has a prototype, that are also object, all objects inherit methods and properties from their prototype

// object literals are inheriting from Object.prototype
// objects created through constructor, for example Person, then it's inheriting from the Person.prototype

function Alien(firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.birthday = new Date(dob)
}

const john = new Alien('John', 'Doe', '12-02-1988')
const jane = new Alien('Jane', 'Doe', '14-09-1899')

// if you console log, see __proto__ -> represents alien prototype, this has it's own __proto__ that belongs to the object prototype (top of the chain)

// the calculate age should be put in the prototype, not the object, since the calculation is always the same, that way we're not flooding construction with functions

Alien.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

Alien.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

Alien.prototype.getsMaried = function (newLastName) {
  this.lastName = newLastName
}

console.log(jane.getFullName())
jane.getsMaried('Smith')
console.log(jane.hasOwnProperty('firstName')) // does object have a property
console.log(jane.hasOwnProperty('getFullName')) // false, its not part of its own property, but its in the prototype

// prototype inheritance

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`
}

const janet = new Person('Janet', 'Jackson', '9-10-1970')
console.log(person1.greeting())

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName) // call is a fn that allows us to call another fn from somewhere else in the current context

  this.phone = phone
  this.membership = membership
}

Customer.prototype = Object.create(Person.prototype) // inherit the Person prototype methods
Customer.prototype.constructor = Customer // make customer.prototype return Customer()

const customer1 = new Customer('Tom', 'Smith', '555-5555-555', 'standard')

// customer greeting, overwrite person prototype fns
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

console.log(janet.greeting())

// OBJECT.CREATE
const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName
  },
}

const mary = Object.create(personPrototypes)
mary.firstName = 'Mary'
mary.lastName = 'Williams'
mary.age = 30

mary.getsMarried('Thompson')

console.log(mary.greeting())

const brad = Object.create(personPrototypes, {
  firstName: { value: 'Brad' },
  lastName: { value: 'Traversy' },
  age: { value: 36 },
})

/* ES 6 classes
 * A class is a template for creating objects in program whereas the object is an instance of a class.
 * A class is a logical entity while object is a physical entity.
 * A class does not allocate memory space on the other hand object allocates memory space.
 * You can declare class only once but you can create more than one object using a class.
 * Classes can't be manipulated while objects can be manipulated.
 * Classes doesn't have any values, whereas objects have its own values.*/

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
  }
  // every method we add inside the class will be added to the prototype
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getsMarried(newLastName) {
    this.lastName = newLastName
  }

  static addNumbers(x, y) {
    return x + y
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980')

mary.getsMarried('Thompson')

console.log(mary)

console.log(Person.addNumbers(1, 2))

// sub classes
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName, birthday)

    this.phone = phone
    this.membership = membership
  }

  static getMembershipCost() {
    return 500
  }
}

const john = new Customer('John', 'Doe', '11-13-1980', '555-555-5555', 'Standard')

console.log(john.greeting())

console.log(Customer.getMembershipCost())

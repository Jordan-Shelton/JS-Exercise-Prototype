/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
 
 Person.prototype.eat = function(edible){
  if(this.stomach.length <= 10){
    this.stomach.push(edible);
  }
 }

 Person.prototype.poop = function(){
   this.stomach = [];
 }
  
  Person.prototype.toString = function(){
    return `${this.name}, ${this.age}`;
  }
  
  const jordan = new Person ('Jordan', 26);
  const bradly = new Person ('Bradly', 27);
  const romy = new Person ('Romy', 29);

  jordan.eat('taco');
  jordan.eat('pizza');
  jordan.eat('noodles');
  jordan.eat('sushi');
  jordan.eat('burrito');
  console.log(jordan.stomach);

  jordan.poop();
  console.log(jordan.stomach);

console.log(jordan.toString());

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0
  }

Car.prototype.fill = function(gallons){
  this.tank + gallons
  }
  
  const wrangler = new Car('Wrangler', 16, 0, 102000);
  wrangler.fill(10);
  console.log(wrangler);
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(attributes, favToy) {
   Person.call(this, attributes);
   this.favToy = attributes.favToy;
  }

  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function(){
    return `Playing with ${this.favToy}`;
  }

  const elizabeth = new Baby ('Elizabeth', 6, 'Nintendo Switch');
 
  elizabeth.play();
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
    2. Whenever a function is called by a preceding dot, the object before that dot is this.
    3. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
    4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}
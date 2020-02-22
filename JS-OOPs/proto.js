// //parent calls
// function Vehicle(name) {
//   this.name = name;
// }

// Vehicle.prototype.start = () => {
//   console.log("Engine of ", this.name, " starts....");
// };

// function Car(name) {
//   Vehicle.call(this, name);
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.start = () => {
//   console.log("Hurray !!!Engine of ", Vehicle.prototype.start.call(this));
// };

// const c = new Car("bmw m3");
// c.start();

// // Object.defineProperty(Vehicle, "name", {
// //   writable: true,
// //   enumerable: true,
// //   configurable: false
// // });

// console.log(
//   Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Car)))
// );
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Car)));
// console.log(Object.getPrototypeOf(Car));

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function() {
  console.log("draw");
};

function Square(length, color) {
  Shape.call(this, color);
  this.length = length;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function() {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1, "red");

function mixin(target, ...source) {
  Object.assign(target, ...source);
}

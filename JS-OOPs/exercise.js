function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function extend_1(Child, Parent) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

function HTMLElement() {
  this.click = function() {
    console.log("Clicked!!!");
  };
}

HTMLElement.prototype.focus = function() {
  console.log("Focus");
};

// const element = new HTMLElement();

function HTMLElementSelect(init = []) {
  this.array = init;
  this.add = function(value) {
    this.array.push(value);
  };
  this.remove = function() {
    this.array.pop();
  };
}

extend_1(HTMLElementSelect, HTMLElement);

const element = new HTMLElementSelect();

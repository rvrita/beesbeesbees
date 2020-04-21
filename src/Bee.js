var Bee = function() {
  // reference to Grub superclass
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// inherit properties from superclass
Bee.prototype = Object.create(Grub.prototype);
// setting constructor
Bee.prototype.constructor = Bee;
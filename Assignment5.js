// JavaScript program to get the volume of a Cylinder, Sphere and Cone
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    let vol = Math.PI * this.radius * this.radius * this.height;
    console.log(vol.toFixed(4));
  }
}
let obj = new Cylinder(1, 1);

obj.getVolume();

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }

  getVolume() {
    let vol = (4 / 3) * Math.PI * this.radius * this.radius;
    console.log(vol.toFixed(4));
  }
}
let obj1 = new Sphere(2);

obj1.getVolume();

class Cone {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    let vol = (Math.PI * this.radius * this.radius * this.height) / 3;
    console.log(vol.toFixed(4));
  }
}
let obj3 = new Cone(2, 1);

obj3.getVolume();

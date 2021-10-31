let rectangle = {
    width: 10,
    height: 20,
    GetArea: function () { return this.height * this.width; },
    GetPerimeter: function () { return 2 * this.height + 2 * this.width; }
};

console.log(rectangle.GetArea());
console.log(rectangle.GetPerimeter());
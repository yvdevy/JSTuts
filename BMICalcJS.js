var YV = {
  fullName: "Yagnavalk Chaapala",
  mass: 77,
  height: 1.7,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
console.log(YV);

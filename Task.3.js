function CarConstructor(model, year) {
  this.model = model;
  this.year = year;
  if (constructor === CarConstructor) {
    return this;
  } else {
    console.log("please call me with new keyword");
  }
}

CarConstructor('Mercedes', 2009)

const car = new CarConstructor('Mercedes', 2009);

console.log(car)
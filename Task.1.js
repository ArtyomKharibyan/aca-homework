const toyota1 = {
  model: "Toyota",
  type: "Camry",
  logModel() {
    console.log(this.model, this.type);
  }
};

const toyota2 = {
  model: "Toyota",
  type: "Rav4"
};

toyota1.type = toyota2.type;
console.log(toyota1);
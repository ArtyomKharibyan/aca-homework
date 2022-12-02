const objArr = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }];
  
const logName = function () {
  console.log(this.name);
}

objArr.forEach(elem => elem.logName = logName);

objArr[3].logName()
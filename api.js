const fs = require('fs');

function getCars() {
  const data = fs.readFileSync('data.json');
  return JSON.parse(data);
}

function addCar(car) {
  const data = getCars();
  car.id = data.length + 1;
  data.push(car);
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

console.log("Lista e makinave:");
console.log(getCars());

// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop(-1);
}

function destructivelyRemoveFirstDriver(){
  drivers.shift(0);
}
function appendDriver(name) {
  const newDrivers = [...drivers, "Broom"];
  return newDrivers;
}

function prependDriver(name) {
  const newDrivers = ["Arnold", ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  const newArray = drivers.slice(0, drivers.length -1);
  return newArray;
}
function removeFirstDriver() {
  const newArray = drivers.slice(1);
  return newArray;
}

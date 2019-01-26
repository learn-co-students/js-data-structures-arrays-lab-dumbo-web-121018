// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.splice(-1);
}

function destructivelyRemoveFirstDriver() {
  drivers.splice(0, 1)
}

function appendDriver(name) {
  let array = [...drivers, name];
  return array;
}

function prependDriver(name) {
  let array = [name, ...drivers];
  return array;
}

function removeLastDriver() {
  return drivers.slice(0,-1);
}

function removeFirstDriver() {
  return drivers.slice(1)
}

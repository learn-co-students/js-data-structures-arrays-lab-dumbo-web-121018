// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

// function appendDriver(){
//   const copyOfDrivers = drivers.slice();
//   copyOfDrivers.push('Broom');
//   return copyOfDrivers;
// }
//
// function prependDriver(){
//   const copyOfDrivers = drivers.slice();
//   copyOfDrivers.unshift('Arnold');
//   return copyOfDrivers;
// }
//
// function removeLastDriver(){
//   const copyOfDrivers = drivers.slice();
//   copyOfDrivers.pop();
//   return copyOfDrivers;
// }
//
// function removeFirstDriver(){
//   const copyOfDrivers = drivers.slice();
//   copyOfDrivers.shift();
//   return copyOfDrivers;
// }

function appendDriver (name) {
  return [...drivers, name];
}

function prependDriver (name) {
  return [name, ...drivers];
}

function removeFirstDriver () {
  return drivers.slice(1);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}

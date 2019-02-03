// Write your solution here!
const drivers = ["Milo","Otis","Garfield"]
function destructivelyAppendDriver(){
  drivers.push("Ralph")
}
function destructivelyPrependDriver(){
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(){
  const newDrivers = [...drivers,"Broom"]
  return newDrivers
}
function prependDriver(){
  const moreDrivers = ["Arnold",...drivers]
  return moreDrivers
}
function removeLastDriver(){
  const noLastDriver = drivers.slice(0,length-1)
  return noLastDriver
}
function removeFirstDriver(){
  const noFirstDriver = drivers.slice(1)
  return noFirstDriver
}

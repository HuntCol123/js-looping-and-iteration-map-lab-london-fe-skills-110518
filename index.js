// Code your solution in this file.

function lowerCaseDrivers(drivers) {


let lowerCaseNames = drivers.map( x => x.toLowerCase());

return lowerCaseNames;
}



<<<<<<< HEAD
function nameToAttributes(drivers) {
  
let someArray = drivers.map(function createNameObject(driverName) {
  //console.log(driverName.split(" ")[0]);
  return {"firstName" : (driverName.split(" ")[0]),
  "lastName" : (driverName.split(" ")[1]) }
  

}
  )
   return someArray;
}

function attributesToPhrase (drivers) {
let someString = drivers.map(function stringify(drivers) {
  return drivers.name + " is from " + drivers.hometown;
})

  return(someString);
=======




function nameToAttributes(){
  let object = {}; 
  
  lowerCaseNames["firstName"] =
  lowerCaseNames["lastName"] =
  
>>>>>>> 30c81527d8b9001ed1375cf7d61bd5bcde8fbb93
}
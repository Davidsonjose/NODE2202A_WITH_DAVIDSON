var name = "lanre";
var age = 50;
var complexion = "fair";
var person = `my name is ${name}, i am ${age} years old and i am ${complexion} in complexion`;
person;
function calYearOfBirth(dateOfBirth) {
  let currentYear = new Date().getFullYear();
  let calYear = currentYear - dateOfBirth;
  return calYear;
}


const data= [
    {name: "davidson", age: 30, complexion: "Dark"},
    {name: "Lanre", age: 100, complexion: "Purple"},
    {name: "Bisi", age: 50, complexion: "Fair"},
]

module.exports = {
  calYearOfBirth,
  data
};
// console.log(person);

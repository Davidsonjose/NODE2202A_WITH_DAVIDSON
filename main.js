const {calYearOfBirth, data} = require("./index");





const theCalculation = calYearOfBirth(2002);
console.log(theCalculation);



const receiveData = data;
receiveData.map((e)=>{
    console.log(e)
})
// console.log(calYearOfBirth())
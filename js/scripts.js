// let inputNumber = $(parseInt("input#number")).val();
let inputNumber =10
let inputArray = [];

for (i = 0; i <= inputNumber; i++) {
  inputArray.push(i);
};
let digits
let splitDigits
const roboSpeak = inputArray.map(function digitize(number){ 
  digits= number.toString();
  let splitDigits= digits.split();
  return splitDigits;
  console.log(splitDigits);
  console.log(digits);
  
  let joinedDigits = splitDigits.join();
  splitDigits.toEach(function roboger(element){
    if (splitDigits==="1") {
    roboSpeak.push("Beep!");
    } else{
    roboSpeak.push();
    }
  });
  
});

//   let newString= string.replace(/1{1,}/g, "Beep!");
//   roboSpeak.push(newString);
//   console.log(roboSpeak);
// });






 


 // for (i = 0; i <= inputArray.length; i++) 
//   if (roboNumbers.includes(inputArray[i])) {
//     inputArray[i] = "Beep!"
//   };
//   console.log(inputArray);




//   const roboNumbers= [1];
// let roboSpeak=[];
// inputArray.forEach(roboger(element) {
//     inputArray[i].replace(/1{1,}/g, "Beep!")
//   }
// });

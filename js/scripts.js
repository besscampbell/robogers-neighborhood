// let inputNumber = $(parseInt("input#number")).val();
let inputNumber =10
let inputArray = [];

for (i = 0; i <= inputNumber; i++) {
  inputArray.push(i);
  };
  console.log(inputArray);
 const roboNumbers= [1,2,3];
 

  const roboSpeak = inputArray.map(function roboger(element){ 
   if ((roboNumbers[0]).includes(element)){
     return "Beep!";
   } else if (roboNumbers.includes(element)){
     return "Boop!";
   } else {
     return element;
   }
console.log(roboSpeak);
  }); 
   
 


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

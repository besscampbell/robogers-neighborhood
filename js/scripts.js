// let inputNumber = $(parseInt("input#number")).val();
let inputNumber =10
let inputArray = [];

for (i = 0; i <= inputNumber; i++) {
  inputArray.push(i);
  };
  console.log(inputArray);
 const roboNumbers= [1];
  let roboSpeak=[]

  inputArray.forEach(function roboger(element){ 
   if (roboNumbers.includes(element)){
     roboSpeak.push("Beep!")
   } else {
     roboSpeak.push(element);
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

// let inputNumber = $(parseInt("input#number")).val();
let inputNumber =10
let inputArray = [];
let output= " "

for (i = 0; i <= inputNumber; i++) {
  inputArray.push(i);
};

const roboSpeak = inputArray.map(function roboger(number){
  let string= number.toString();
  if (string.includes("1")){
      output="Beep!";
  } else {
      output= number
  }
    
  return output;
});

let inputArray = [];
let output
let inputNumber
console.log(inputNumber);
for (i = 0; i <= inputNumber; i++) {
  (function array(number){
  inputArray.push(i);
  }(i));
}
// while (number > -1) (function arrayMaker(number){
//   inputArray.push(number);
//   number --;
// }); 


const roboSpeak = inputArray.map(function roboger(element){
  let string = element.toString();
  if (string.includes("3")){ 
    output = "Won't you be my neighbor?"
  } else if(string.includes("2")){
    output = "Boop!"
  } else if (string.includes("1")){
    output = "Beep!";
  } else {
    output = number
  }
  console.log(roboSpeak);
  return output;
  
});

 $(document).ready(function(){
  $("#roboger").submit(function(){
    let inputNumber = $("input#number").val();
    array(inputNumber);
    roboger(inputArray);
  });
  $("#response").text(roboSpeak);
  console.log(roboSpeak);
 });
  

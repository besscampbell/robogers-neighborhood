let inputArray = [];
let output
let inputNumber
console.log(inputNumber);
for (i = 0; i <= inputNumber; i++) function array(element){
  inputArray.push(i);
});
const roboSpeak = inputArray.map(function roboger(number){
  let string = number.toString();
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
  });
  $("#response").text(roboSpeak);
  console.log(roboSpeak);

  array(inputNumber);
  roboger(inputArray);
});

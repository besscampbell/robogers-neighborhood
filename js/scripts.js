let inputArray = []
function arrayMaker(number) {
  for (i = 0; i <= number; i++) {
    inputArray.push(i);
  };
};
let output=""
function roboSpeak(array) {
   roboSpokenWord = array.map(function roboger(element){
    let string = element.toString();
    if (string.includes("3")){ 
      output = "Won't you be my neighbor? "
    } else if(string.includes("2")){
      output = "Boop! "
    } else if (string.includes("1")){
      output = "Beep! ";
    } else {
      output = (element + " ")
    }
    return output;
  });
};  

$(document).ready(function(){
  $("#roboger").submit(function(event){
    event.preventDefault();
    const inputNumber = $("input#number").val();
    arrayMaker(inputNumber);
    roboSpeak(inputArray);
    $("#output").show();
    $("#response").text(roboSpokenWord);
  });
});
  

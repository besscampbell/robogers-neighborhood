let inputArray = []
function arrayMaker(number) {
  for (i = 0; i <= number; i++) {
    inputArray.push(i);
  };
  console.log(inputArray);
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
    console.log(inputNumber);
      arrayMaker(inputNumber);
      roboSpeak(inputArray);
      console.log(roboSpokenWord);
      $("#response").html(roboSpokenWord);
      $("#output").show();
  });
  $("#reset").submit(function(){
    $("#roboger").trigger("reset")
  });
});
  

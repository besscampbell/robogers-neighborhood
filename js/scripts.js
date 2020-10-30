$(document).ready(function(){
  $("#roboger").submit(function(event){
    event.preventDefault();
    let inputNumber = $("input#number").val();
    // array(inputNumber);
    // roboger(inputNumber);
    let output
// let inputNumber = 12
    let inputArray=[]
    for (i = 0; i <= inputNumber; i++) {
      inputArray.push(i);
      console.log(inputArray);
    };
    const roboSpeak = inputArray.map(function roboger(element){
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
    $("#response").text(roboSpeak);
    $("#output").show();
      console.log(roboSpeak);
  });
});
  

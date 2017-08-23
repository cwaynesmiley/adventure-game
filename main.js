function playGame() {
  var text;
  var answer = document.getElementById("startQuestion").value;
  
  switch(answer){
  case "Yes":
    text="Awesome, let's play!";
    break;
  case "No":
    text="Fine, be a bum!";
    break;
  default:
    text="What you talking about Willis? Answer Yes or No!";
    break;
               }
    document.getElementById("adventure-answer").innerHTML = text;
};

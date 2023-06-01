var posibilities =["rock","paper","scissors"];
var userChoice =Math.random();
if (userChoice < 0.4) {
    userChoice = "paper";
} else if(userChoice <= 0.8) {
    userChoice = "scissors";
} else {
    userChoice = "rock";
}
var computerChoice = Math.random();
if (computerChoice < 0.4) {
    computerChoice = "rock";
} else if(computerChoice <= 0.8) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}




if (computerChoice < 1) {
    computerChoice = "rock";
} else if(1 <= computerChoice <= 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}



function play(userChoice, computerChoice){


if (userChoice === computerChoice) {
      return "It is a tie";
    }

   
    if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        return "User Wins";
      } else {
        return "Computer Wins";
      }
    }
   
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer Wins";
      } else {
        return "User Wins";
      }
    }
   
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Computer Wins";
      } else {
                return "User Wins";
      }
    }
}


play();

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
(userChoice, computerChoice);
console.log(play(userChoice, computerChoice))

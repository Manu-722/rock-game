function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Retrieve scores from localStorage or initialize them
  let userScore = parseInt(localStorage.getItem("userScore")) || 0;
  let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

  let result = `You chose ${userChoice}. Computer chose ${computerChoice}. `;

  // Determine the result and update scores
  if (userChoice === computerChoice) {
      result += "It's a tie!";
  } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
  ) {
      result += "You win!";
      userScore++;
  } else {
      result += "You lose!";
      computerScore++;
  }

  // Save updated scores back to localStorage
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);

  // Display the result and scores
  result += `\nYour score: ${userScore}. Computer's score: ${computerScore}.`;
  document.getElementById("result").innerText = result;
}

// Function to reset scores
function resetScores() {
  localStorage.setItem("userScore", 0);
  localStorage.setItem("computerScore", 0);
  document.getElementById("result").innerText = "Scores have been reset.";
}
// Create an Object
const person4 = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName, country = "US"} = person4;

// Display Primitive Values
document.getElementById("demo").innerHTML =
firstName + " " + lastName + " " + country;


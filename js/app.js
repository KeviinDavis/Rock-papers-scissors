/** 
 * 1. Define any variables that are used to track the state of the game:
 * The player/user choice
 * The computers choice
 * match results - win/lose
 * The result message where we display who won that round
 * 
 * 2.  lets define the required constants: 
 * - There are only 3 choices user can make
 *  -rock
 *  -paper
 *  -scissors
 * We need a reference to the DOM element to display messages
 * 
 * 3. Handle a player clicking a button
 * 
 * 4. Handle generating a random selection for the computers choice 
 * 
 * 5. Compare the players choice to the computer choice, and then check for winner based on game rules
 * 
 * 6. Render a win/lose/tie message to the player/user
 * include both player and computer selction in the message to indicate who won
 * 
 * 7. Allow user to start the game with the reset button
 * 
   - Clear out the state of the game
   - Reset the computer and player choices

 */


  /*-------------------------------- Constants --------------------------------*/
const choices = ['Rock', 'Paper', 'Scissors'];

/*-------------------------------- Variables --------------------------------*/
let playerChoice = '';
let computerChoice = '';
let msg;

/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector('#result-display');

/*-------------------------------- Functions --------------------------------*/
const getPlayerChoice = (event) => {
  playerChoice = event.target.id;
}

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
}

const compare = () => {
  // Player can win rock vs scissors || paper vs rock || scissors vs paper
  if (playerChoice === computerChoice) {
    msg = 'You tied!';
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    msg = 'Congrats, you win!';
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    msg = 'Congrats, you win!';
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    msg = 'Congrats, you win!';
  } else {
    msg = 'You lose! Try again!';
  }
}

const render = () => {
  resultDisplayEl.textContent = `You chose ${playerChoice} and the computer chose ${computerChoice}. ${msg}`;
};

const play = (event) => {
  getPlayerChoice(event);      // Capture the player's choice
  getComputerChoice();         // Generate the computer's choice
  compare();                   // Compare the choices and determine the winner
  render();                    // Display the result to the player
}

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('#rock').addEventListener('click', play);
document.querySelector('#paper').addEventListener('click', play);
document.querySelector('#scissors').addEventListener('click', play);

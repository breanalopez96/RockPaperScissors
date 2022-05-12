//.console.log('script imported');


const playerTxt = document.getElementById('playerTxt');
const playerPic = document.getElementById('playerPic');
const compTxt = document.getElementById('compTxt');
const compPic = document.getElementById('compPic');
const outcomeTxt = document.getElementById('outcomeTxt');
const rockPic = '<img src="img/rock.jpg">';
const paperPic = '<img src="img/paper.jpg">';
const scissorsPic = '<img src="img/scissors.jpg">';

var object;

while (object != "scissors" && object != "rock" && object != "paper") {
	object = prompt("Choose your weapon: rock, paper, or scissors??");
	object = object.toLowerCase();
} 

console.log('Object Variable: ' + object);

if(object.toLowerCase() ==  'rock') {
	playerTxt.innerHTML = "You\'ve chosen " + object + "...";
	playerPic.innerHTML = rockPic;
} else if (object.toLowerCase() == 'paper') {
	playerTxt.innerHTML = "You\'ve chosen " + object + "...";
	playerPic.innerHTML = paperPic;
} else if (object.toLowerCase() == 'scissors') {
	playerTxt.innerHTML = "You\'ve chosen " + object + "...";
	playerPic.innerHTML = scissorsPic;	
}

var computer = Math.floor(Math.random() * 3);
//console.log(animal);

if(computer == 0) {
	compTxt.innerHTML = "Opposing player picked rock";
	compPic.innerHTML = rockPic;
} else if (computer == 1) {
	compTxt.innerHTML = "Opposing player scissors";
	compPic.innerHTML = scissorsPic;
} else if (computer == 2) {
	compTxt.innerHTML = "Opposing player paper";
	compPic.innerHTML = paperPic;
}


if(object.toLowerCase() == 'scissors' && computer == 0){
	outcomeTxt.innerHTML = "Sorry, better luck next time!";

} else if(object.toLowerCase() == 'scissors' && computer == 1){
	outcomeTxt.innerHTML = "Tie. Wanna play again?";

} else if(object.toLowerCase() == 'scissors' && computer == 2){
	outcomeTxt.innerHTML = "Yay! You\'ve won!";

} else if(object.toLowerCase() == 'rock' && computer == 0){
	outcomeTxt.innerHTML = "Tie. Wanna play again?";

} else if(object.toLowerCase() == 'rock' && computer == 1){
	outcomeTxt.innerHTML = "Congratulations! You've won!";

} else if(object.toLowerCase() == 'rock' && computer == 2){
	outcomeTxt.innerHTML = "Awww. Poor baby, you've lost. Play again!.";

} else if(object.toLowerCase() == 'paper' && computer == 0){
	outcomeTxt.innerHTML = "Yes! No whammies!";

} else if(object.toLowerCase() == 'paper' && computer == 1){
	outcomeTxt.innerHTML = "Close but no cigar, play again?.";
	
} else if(object.toLowerCase() == 'paper' && computer == 2){
	outcomeTxt.innerHTML = "It's a draw. Play again for a new outcome";
}


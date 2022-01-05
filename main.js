let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('#user-score');
const computerScore_span = document.querySelector('#computer-score');
const result_p = document.querySelector('.result p');
const rock_div = document.querySelector('#r');
const paper_div = document.querySelector('#p');
const scissors_div = document.querySelector('#s');

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomChoice = Math.floor(Math.random() * 3);
	return choices[randomChoice];
}

function win(user, comp) {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = user + ' Beats ' + comp;
}

function lose(user, comp) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = user + ' lost to ' + comp;
}

function draw(user, comp) {
	result_p.innerHTML = user + ' equals ' + comp;
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'sr':
		case 'rp':
		case 'ps':
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function () {
		game('r');
	}),
		paper_div.addEventListener('click', function () {
			game('p');
		}),
		scissors_div.addEventListener('click', function () {
			game('s');
		});
}
main();

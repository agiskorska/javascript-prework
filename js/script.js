function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = 'nieznany ruch';


let playerMove;

let computerNumber = Math.floor(Math.random() * 3);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);


if (playerInput == '1'){
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);


if (computerNumber == 0) {
    computerMove = 'kamień';
} else if (computerNumber == 1) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

console.log("Wylosowany ruch to " + computerMove);

if (playerMove === 'nieznany ruch') {
    printMessage('Wybierz liczbę między 1 i 3');
} else if (playerMove == computerMove) {
    printMessage('Remis, spróbuj jeszcze raz');
} else if (computerMove === 'kamień' && playerMove === 'papier' || computerMove === 'papier' && playerMove == 'nożyce') {
    printMessage('Gratulacje, wygrywasz!');
} else {
    printMessage('Niestety, przegrywasz');
}


function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove;
    
let playerMove;

let computerNumber = Math.floor(Math.random() * 3 + 1);

let playerInput = +prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput + '. Komputer wylosował: ' + computerNumber);

function getMoveName(number) {

    if (number == 1) {
        moveName = 'kamień';
    } else if (number == 2) {
        moveName = 'papier'; 
    } else if (number == 3) {
        moveName = 'nożyce'; 
    } else {
        moveName = 'nieznany ruch';
    }

    return moveName;
}

function getResult() {
    let computer = getMoveName(computerNumber);
    let human = getMoveName(playerInput);

    if (computer == human) {
        printMessage('Remis, zagraj jeszcze raz!');
    } else if (computer == 'kamień' && human == 'papier' || computer == 'papier' && human == 'nożyce' || computer == 'nożyce' && human == 'papier'){
        printMessage('Zwycięstwo! Gratulacje!');
    } else {
        printMessage('Przegrywasz, sorry!');
    }
}

getResult();



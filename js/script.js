{
    function printMessage(msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        messages.appendChild(div);
    }

    function clearMessages(){
        messages.innerHTML = '';
    }

    document.getElementById('button1').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('button2').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('button3').addEventListener('click', function(){
        playGame(3);
    });

    function playGame(playerInput) {

        function clearMessages(){
            messages.innerHTML = '';
        }
        clearMessages();

        let computerNumber = Math.floor(Math.random() * 3 + 1);

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
            let computer = getMoveName(computerNumber),
                human = getMoveName(playerInput);

            if (computer == human) {
                printMessage('Remis, zagraj jeszcze raz!');
            } else if (computer == 'kamień' && human == 'papier' || computer == 'papier' && human == 'nożyce' || computer == 'nożyce' && human == 'kamień'){
                printMessage('Zwycięstwo! Gratulacje!');
            } else {
                printMessage('Przegrywasz, sorry!');
            }
        }
        getResult();
    }
    let messages = document.getElementById('messages');
}
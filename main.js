const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const starterBtn = document.querySelector("button");
const resBtn = document.querySelector(".restart");

let blueRock = false;
let bluePaper = false;
let blueScissors = false;

let redRock = false;
let redPaper = false;
let redScissors = false;

const playerRock = document.querySelector(".playerRock");
const playerPaper = document.querySelector(".playerPaper");
const playerScissors = document.querySelector(".playerScissors");

const computerRock = document.querySelector(".computerRock");
const computerPaper = document.querySelector(".computerPaper");
const computerScissors = document.querySelector(".computerScissors");

const redHands = [computerRock, computerPaper, computerScissors];
const blueHands = [playerRock, playerPaper, playerScissors];
const redHandsActive = [redRock, redPaper, redScissors];
const clickedList = [rock, paper, scissors];

let whoIsWinning = document.querySelector('p:first-child span');
let numberOfGames = document.querySelector('p:nth-child(2) span');
let winsByPlayer = document.querySelector('p:nth-child(3) span');
let winsByComputer = document.querySelector('p:nth-child(4) span');
let draws = document.querySelector('p:last-child span');

let gamesCounter = 0;
let winGamesCounter = 0;
let lostGamesCounter = 0;
let drawCounter = 0;



const cpuWins = document.querySelector(".cpuWins");
const playerWins = document.querySelector(".playerWins");
const drawSign = document.querySelector(".drawSign");
const computerCrownSpot = document.querySelector(".computerCrownSpot");
const playerCrownSpot = document.querySelector(".playerCrownSpot");
const battleTable = document.querySelector(".battle");

let clickCheck = false;
let matchOver = false;








// ponizsze zmienic z togglem, lub wyprobowac zrobic toggle+for pętla

rock.addEventListener('click', function () {

    //1 klasa do CLIKED bedzie lepsza
    rock.classList.toggle('clickedRock');
    paper.classList.remove('clickedPaper');
    scissors.classList.remove('clickedScissors')
    blueRock = true;
    bluePaper = false;
    blueScissors = false;


    if (rock.classList.contains('clickedRock')) {
        clickCheck = true;
    } else {
        clickCheck = false;
    }

});
// moge ulepszyc to za pomoca petli i czyszczenia classy WELLSEE
paper.addEventListener('click', function () {
    paper.classList.toggle('clickedPaper');
    rock.classList.remove('clickedRock');
    scissors.classList.remove('clickedScissors')
    blueRock = false;
    bluePaper = true;
    blueScissors = false;

    if (paper.classList.contains('clickedPaper')) {
        clickCheck = true;
    } else {
        clickCheck = false;
    }

});

scissors.addEventListener('click', function () {
    scissors.classList.toggle('clickedScissors');
    paper.classList.remove('clickedPaper');
    rock.classList.remove('clickedRock');
    blueRock = false;
    bluePaper = false;
    blueScissors = true;

    if (scissors.classList.contains('clickedScissors')) {
        clickCheck = true;


    } else {
        clickCheck = false;
        // starterBtn.disabled = true;
    }


});
//po nacisnieciu usuwa wszystkie klasy i robi czyszczenie hands
starterBtn.addEventListener('click', function () {
    scissors.classList.remove('clickedScissors');
    paper.classList.remove('clickedPaper');
    rock.classList.remove('clickedRock');



    if (blueRock == true) {
        playerRock.classList.add("playerActive")
    }
    if (bluePaper == true) {
        playerPaper.classList.add("playerActive")
    }
    if (blueScissors == true) {
        playerScissors.classList.add("playerActive")
    }




});

// ponizej 'AI' komputera oparty na losowym wyborze z tablicy

const playGame = () => {



    if (clickCheck == true) {

        // starterBtn.disabled = false;
        gamesCounter++;
        numberOfGames.textContent = gamesCounter;



        const index = (Math.floor(Math.random() * redHands.length));

        const result = redHands[index];

        result.classList.add("computerActive");

        switch (redHands[index]) {
            case redHands[0]:
                redRock = true;
                redPaper = false;
                redScissors = false;
                break;
            case redHands[1]:
                redRock = false;
                redPaper = true;
                redScissors = false;
                break;
            case redHands[2]:
                redRock = false;
                redPaper = false;
                redScissors = true;
                break;


        }
        matchOver = true;
        starterBtn.disabled = true;
        showWinner();
    } else {
        alert("Zanim zagrasz musisz zaznaczyć którąś z opcji :)")
        clickCheck = false;

        //Nie można było zrobić 1 klasy 'clicked' bo po clicku renderuje nowy obrazek z innym kolorem i większym rozmiarem
        //JEDNAK INNY ARAY -> trzeba usunąc wszystkie klasy playerActive! (blueHands array)

        blueHands.forEach(blueHand => {
            blueHand.classList.remove('playerActive');
        });


    }
    theWinnerIs()
};


// trzeba NAPISAC 3 rozne FUNKCJE i wprowadzic IF statment przy wyborze playera u gory 
//bo booleany beda sie gryzly 
const showWinner = () => {

    if (blueRock) {

        switch (blueRock) {
            case blueRock == redRock:
                drawCounter++;
                draws.textContent = drawCounter;
                resBtn.classList.add("restartActive");
                drawSign.classList.add("drawSignActive");
                break;

            case blueRock == redPaper:
                lostGamesCounter++;
                winsByComputer.textContent = lostGamesCounter;
                resBtn.classList.add("restartActive");
                computerCrownSpot.classList.add("cpuWinsShow");
                break;

            case blueRock == redScissors:
                winGamesCounter++;
                winsByPlayer.textContent = winGamesCounter;
                resBtn.classList.add("restartActive");
                playerCrownSpot.classList.add("playerWinsShow");
                break;

        }

    } else if (bluePaper) {
        switch (bluePaper) {
            case bluePaper == redRock:
                winGamesCounter++;
                winsByPlayer.textContent = winGamesCounter;
                resBtn.classList.add("restartActive");
                playerCrownSpot.classList.add("playerWinsShow");
                break;

            case bluePaper == redPaper:
                drawCounter++;
                draws.textContent = drawCounter;
                resBtn.classList.add("restartActive");
                drawSign.classList.add("drawSignActive");
                break;

            case bluePaper == redScissors:
                lostGamesCounter++;
                winsByComputer.textContent = lostGamesCounter;
                resBtn.classList.add("restartActive");
                computerCrownSpot.classList.add("cpuWinsShow");
                break;

        }

    } else if (blueScissors) {

        switch (blueScissors) {
            case blueScissors == redRock:
                lostGamesCounter++;
                winsByComputer.textContent = lostGamesCounter;
                resBtn.classList.add("restartActive");
                computerCrownSpot.classList.add("cpuWinsShow");
                break;

        }

        switch (blueScissors) {
            case blueScissors == redPaper:
                winGamesCounter++;
                winsByPlayer.textContent = winGamesCounter;
                resBtn.classList.add("restartActive");
                playerCrownSpot.classList.add("playerWinsShow");
                break;
        }

        switch (blueScissors) {
            case blueScissors == redScissors:
                drawCounter++;
                draws.textContent = drawCounter;
                resBtn.classList.add("restartActive");
                drawSign.classList.add("drawSignActive");
                break;
        }
    }

}

// funkcja do buttona czyszczaca pole bitwy i zerujaca booleany
const clearBattle = () => {
    // rock.classList.remove('clickedRock');
    // paper.classList.remove('clickedPaper');
    // scissors.classList.remove('clickedScissors')
    playerCrownSpot.classList.remove("playerWinsShow");
    computerCrownSpot.classList.remove("cpuWinsShow");
    drawSign.classList.remove("drawSignActive");
    starterBtn.disabled = false;

    // 2 x petla by usunac active klasy

    for (i = 0; i < blueHands.length; i++) {
        blueHands[i].classList.remove('playerActive')
    };

    for (i = 0; i < redHands.length; i++) {
        redHands[i].classList.remove('computerActive')
    };

    // for (i = 0; i < clickedList.length; i++) {
    //     clickedList[i].classList.remove('')
    // }


    // const result = redHands[index];

    // result.classList.add("computerActive");


    matchOver = false;
    resBtn.classList.remove("restartActive");


    starterBtn.disabled = false;
    clickCheck = false;



    rock.classList.remove('clickedRock');
    paper.classList.remove('clickedPaper');
    scissors.classList.remove('clickedScissors')


}

const theWinnerIs = () => {



    if (gamesCounter === 0) {
        whoIsWinning.textContent = "-";
    } else if (gamesCounter !== 0) {
        if (winGamesCounter > lostGamesCounter) {
            whoIsWinning.textContent = "Gracz";

        } else if (winGamesCounter == lostGamesCounter) {
            whoIsWinning.textContent = "Remis";
        } else if (winGamesCounter < lostGamesCounter) {
            whoIsWinning.textContent = "Komputer";
        }
    }



}
starterBtn.addEventListener('click', playGame);

resBtn.addEventListener('click', clearBattle);

theWinnerIs()
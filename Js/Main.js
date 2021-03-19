window.addEventListener('load', init);
//Change levels
const levels =
{
    easy: 5,
    medium: 3,
    hard: 2
}

const currentlevels = levels.easy;

var time = currentlevels;
var score = 0;
var playingnow;



const words =
    [
        'hat',
        'Dangerous',
        'river',
        'lucky',
        'statue',
        'status',
        'generate',
        'hoby',
        'Stubborn',
        'cockTail',
        'Development',
        'QuerySelector',
        'ReactJs',
        'Establishment',
        'Revoulation',
        'Evaluate',
        'Experience',
        'siblings',
        'Scanf and printf',
        'Beautiful',
        'takeoff',
        'AirCraft',
        'underway',
        'Evolve',
        'HuntingZONE'
    ];


const word_input = document.querySelector("#input");
const currentword = document.querySelector("#current-word");
const score_display = document.querySelector("#score");
const highestscore_display = document.querySelector("#highscore");
const time_display = document.querySelector("#time");
const seconds = document.querySelector("#seconds");
const Msg = document.querySelector("#message");


//Initialize Game
function init() {
    seconds.innerHTML = currentlevels;
    //Load word from array
    showword(words);
    //Start matching on input
    word_input.addEventListener("input", startMatch);
    //Call countdown for every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);


}

function startMatch() {

    if (matchWords()) {

        playingnow = true;
        time = currentlevels + 1;
        showword(words);
        word_input.value = "";
        score++;
        highestscore_display.innerHTML = score;

    }
    //if score - 1 ,display 0
    if (score === -1) {
        score_display.innerHTML = 0;
    }
    else {
        score_display.innerHTML = score;
    }

}
function matchWords() {
    if (word_input.value === currentword.innerHTML) {
        Msg.innerHTML = "Correct!!!";
        return true;
    }
    else {
        Msg.innerHTML = "";
        return false;
    }
}

function showword(words) {
    //Generate random array
    const randomindex = Math.floor(Math.random() * words.length);
    //Output random word
    currentword.innerHTML = words[randomindex];
    //check status of game
}

function countdown() {
    if (time > 0) {
        //Dec
        time--;
    }
    else if (time == 0) {
        playingnow = false;
    }
    //Show time
    time_display.innerHTML = time;
}

function checkStatus() {
    if (!playingnow && time == 0) {
        Msg.innerHTML = "Game over!!";
        score = -1;


    }
}

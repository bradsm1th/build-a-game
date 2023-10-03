/*******************************
// part 1, 2…
/******************************/
/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');


const IMAGE_LOOKUP = {
  'r': {
    image: 'images/rock.png',
    beats: 's',
  },
  'p': {
    image: 'images/paper.png',
    beats: 'r',
  },
  's': {
    image: 'images/scissors.png',
    beats: 'p',
  }
}

/*----- app's state (variables) -----*/

// {}
// keys:    'p' == player, 't' == tie, 'c' == computer
// values:  0,1,2…n
let scores;

// {}
// keys:    'p'layer, 'c'omputer
// values:  'r'ock, 'p'aper, 's'cissors
let results; // think 'choices'

// ''
// 'p'layer, 't'ie, 'c'omputer
let outcome;

/*----- cached element references -----*/
const playerResultEl = document.querySelector('#p-result');
const computerResultEl = document.querySelector('#c-result');
const countdownEl = document.querySelector('#countdown');


/*----- event listeners -----*/
document.querySelector('main')
  .addEventListener('click', handleChoice);


/*----- functions -----*/
init();

function getRandomRPS() {
  // [] … returns an array
  const compChoice = Object.keys(IMAGE_LOOKUP);

  // # … returns an integer
  const randomIndex = Math.floor(Math.random() * compChoice.length);

  return compChoice[randomIndex];
}

function getWinner() {
  // handle a tie
  if (results.p === results.c) return 't';

  // if it's not a tie, then somebody won, so there's only 2 choices...aka USE A TERNARY
  return (IMAGE_LOOKUP[results.p].beats === results.c) ? 'p' : 'c';
}

function handleChoice(evt) {
  // create "guard" if evt.target isn't a button el
  if (evt.target.tagName !== "BUTTON") return;

  // update player choice/state
  results.p = evt.target.innerText.toLowerCase();

  // compute random choice for computer…use named function
  results.c = getRandomRPS();

  // figure out who won
  outcome = getWinner();

  // update the scores
  scores[outcome]++;

  // (re)render the DOM
  render();
}


// initialize all state and call render()
function init() {
  scores = {
    p: 0,
    t: 0,
    c: 0,
  };

  results = {
    p: 'r',
    c: 'r',
  };

  outcome = 't';

  render();

}

function renderScores() {
  for (let key in scores) {
    const scoreEl = document.querySelector(`#${key}-score`);
    scoreEl.innerText = scores[key];
  }
}

function renderResults() {
  playerResultEl.src = IMAGE_LOOKUP[results.p].image;
  computerResultEl.src = IMAGE_LOOKUP[results.c].image;
  // update border for winner using another ternary
  playerResultEl.style.borderColor = (outcome === 'p' ? 'var(--winner-color)' : 'white');
  computerResultEl.style.borderColor = (outcome === 'c' ? 'var(--winner-color)' : 'white');
}

function render() {
  renderCountdown(function () {

    renderScores();
    renderResults();
  });

}

function renderCountdown(callBack) {
  let count = 3;
  AUDIO.currentTime = 0;
  // AUDIO.play();
  countdownEl.style.visibility = 'visible';
  countdownEl.innerText = count;
  
  const timerId = setInterval(function(){
    count--;
    if (count) {
      countdownEl.innerText = count;
    } else {
      clearInterval(timerId);
      countdownEl.style.visibility = 'hidden';
      callBack();
    }
  }, 1000);
}
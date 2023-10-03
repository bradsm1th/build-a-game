/*******************************
// part 1, 2…
/******************************/
/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');


const IMAGE_LOOKUP = {
  'r': 'images/rock.png',
  'p': 'images/paper.png',
  's': 'images/scissors.png',
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
  playerResultEl.setAttribute('src', `${IMAGE_LOOKUP[results.p]}`);
  computerResultEl.src = IMAGE_LOOKUP[results.c];
}

function render() {
  renderScores();

  renderResults();
}

/*******************************
// part 1
/******************************/
/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');

/*----- app's state (variables) -----*/

// {}. 
// keys:    'p' == player, 't' == tie, 'c' == computer
// values:  0,1,2…n
let scores;

// {}. 
// keys:    'p'layer, 'c'omputer
// values:  'r'ock, 'p'aper, 's'cissors
let results;

// ''.
// 'p'layer, 't'ie, 'c'omputer
let outcome;

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

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

function render() {
  
}
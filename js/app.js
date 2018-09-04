//List of possible card images
const diwaliDeck = [
 {
    img: "img/if_diwali_gifts_2670653.png",
    alt: "Gift"
  },
 {
    img: "img/if_diwali_gifts_2670653.png",
    alt: "Gift"
  },
 {
    img: "img/if_kalash_decorations_2670648.png",
    alt: "Kalash"
  },
 {
    img: "img/if_kalash_decorations_2670648.png",
    alt: "Kalash"
  },
  {
    img: "img/if_kandeel_decorations_02_2670635.png",
    alt: "Kandeel"
  },
 {
    img: "img/if_kandeel_decorations_02_2670635.png",
    alt: "Kandeel"
  },
 {
    img: "img/if_lamp_decorations_01_2670646.png",
    alt: "Lamp"
  },
 {
    img: "img/if_lamp_decorations_01_2670646.png",
    alt: "Lamp"
  },
 {
    img: "img/if_patakas_decorations_2670644.png",
    alt: "Patakas"
  },
 {
    img: "img/if_patakas_decorations_2670644.png",
    alt: "Patakas"
  },
 {
    img: "img/if_rangoli_decorations_2670643.png",
    alt: "Rangoli"
  },
 {
    img: "img/if_rangoli_decorations_2670643.png",
    alt: "Rangoli"
  },
 {
    img: "img/if_rocket_fireworks_2670642.png",
    alt: "Rocket"
  },
 {
    img: "img/if_rocket_fireworks_2670642.png",
    alt: "Rocket"
  },
 {
    img: "img/if_shree_2670640.png",
    alt: "Shree"
  },
 {
    img: "img/if_shree_2670640.png",
    alt: "Shree"
  }];

//////////////Global variables
let checkCards = []
const restart = document.querySelector('.fa-repeat');
const deck = document.querySelector('.deck');
let count = "";
const moves = document.querySelector('.moves');
const timer = document.querySelector('.timer');
const replay = document.querySelector('.replay');
let timerRunning = "";

////////////Event Listeners
// when all is loaded start game
document.addEventListener('DOMContentLoaded', loadGame());

////////////Functions
//Main click and game functions
deck.addEventListener('click', function(e) {
  //Check if timer is already running
  if (timerRunning === false) {
      time = setTimeout(counter, 1000);
  };
  timerRunning = true;
  //Flip card
  if (e.target.tagName === 'LI' && checkCards.length < 3) {
    e.target.classList.add('show');
    checkCards.push(e.target.firstElementChild);
  };
  //Check cards
  if (checkCards[0].alt === checkCards[1].alt) {
    checkCards[0].parentElement.classList.add('match');
    checkCards[1].parentElement.classList.add('match');
    checkCards.splice(0, 2);
  } else {
    setTimeout(unmatch, 1000);
    function unmatch() {
      checkCards[0].parentElement.classList.remove('show');
      checkCards[1].parentElement.classList.remove('show');
      checkCards.splice(0, 2);
    };
  };
  //count moves if card clicked and decrese star value
  if ((checkCards.length % 2) === 0) {
    count += 1;
    moves.innerHTML = count;
  };
  //Remove Stars
  if (count === 11) {
    document.querySelector('.fa-star:last-of-type').classList.remove('fa-star');
  };
  if (count === 16) {
    document.querySelector('.fa-star:last-of-type').classList.remove('fa-star');
  };
  if (count === 21) {
    document.querySelector('.fa-star:last-of-type').classList.remove('fa-star');
  };
  if (count === 26) {
    document.querySelector('.fa-star:last-of-type').classList.remove('fa-star');
  };
  setTimeout(checkFinish, 500);
});

//Restart game on restart click
restart.addEventListener('click', function() {
  restartGame();
});

//Load Game
function loadGame() {
  shuffle(diwaliDeck);
  for (i=0; i<diwaliDeck.length; i++) {
    var place = document.querySelectorAll('.card')[i];
    place.setAttribute('src', diwaliDeck[i].img);
    place.setAttribute('alt', diwaliDeck[i].alt);
  };
  count = 0;
  moves.innerHTML = count;
  seconds = 0;
  timerRunning = false;
  updateTime();
};

// Shuffle function from http://stackoverflow.com/a/2450976
  function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }
      return array;
  };

//Modal Functions
function checkFinish() {
  let openCards = document.querySelectorAll('.match');
  const summary = document.querySelector('.summary');
  let stars = document.querySelectorAll('.fa-star');
  if (openCards.length === 16) {
    summary.classList.add('congrats');
    summary.querySelector('.score-moves').innerHTML = count;
    summary.querySelector('.score-time').textContent = elapsedTime();
    summary.querySelector('.score-stars').innerHTML = stars.length;
    endTimer();
    //Restart when Play again is clicked
    replay.addEventListener('click', function replay(){
      setTimeout(function() {
        summary.classList.remove('congrats');
      }, 0);
      restartGame();
    })
  };
};

//Funtion to restart the game
function restartGame() {
  let openCards = document.querySelectorAll('.match'); //select all open cards
  const stars = document.querySelectorAll('.star');
  stars.forEach(function(e) {
    e.classList.add('fa-star');
  });
  openCards.forEach(function(e) {
    e.classList.remove('show', 'match'); //remove show from class list of open cards
  });
  endTimer();
  loadGame();
}
//Timer functions
  function endTimer() {
      clearTimeout(time);
  };

  //Count every second and update clock timer at score panel
  function counter() {
      seconds++;
      updateTime();

      //Call itself in 1 second to update time again
      time = setTimeout(counter, 1000);
  };

  //Show current time at score panel
  function updateTime() {
      timer.textContent = elapsedTime();
  };

  //Format time value to 'mm:ss' format
  function elapsedTime() {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return ((min < 10) ? "0" + min : min) + ":" + ((sec < 10) ? "0" + sec : sec);
  };

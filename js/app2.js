//List of possible card values
const values = ["fa-diamond", "fa-diamond", "fa-paper-plane-o", "fa-paper-plane-o", "fa-anchor", "fa-anchor", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-bicycle", "fa-bicycle", "fa-camera", "fa-camera"];

//The most accessed DOM elements
const score = document.querySelector(".score-panel");
const starElements = score.querySelectorAll(".score-panel .fa");
const clock = score.querySelector(".score-panel .clock");
const restarts = document.querySelectorAll(".restart");
const board = document.querySelector(".board");
const finished = document.querySelector(".finish-dialog");

let matches, moves, selected, stars, seconds, timer;

//Game starts
init();


/*
 * Event listeners
 */

/*
 * On restart:
 *   - Stop timer (no more counting)
 *   - Hide congrats panel
 *   - Restart the game
 */
restarts.forEach(restart => restart.addEventListener("click", () => {
    endTimer();
    finished.classList.add("hidden");
    init();
}));

//Board click event
board.addEventListener("click", event => {
    const card = event.target;

    //Check if the target is a card and it has not been selected yet
    if (isNotFlippedCard(card)) {

        flipUp(card);

        //First card pick
        if (selected === undefined) {
            checkStart();
            selected = card; //Remember first picked card
        }
        //Second card pick
        else {
            moves++;

            //If equal, update matches, lock cards and check if it's the last match
            if (value(card) === value(selected)) {
                matches--;
                match(card);
                match(selected);
                checkEnd();
            }
            //If not equal, mark then as wrong and flip both cards down
            else {
                wrong(card);
                wrong(selected);
                setTimeout(flipDown, 1000, card);
                setTimeout(flipDown, 1000, selected);
            }
            //Clear selected card
            selected = undefined;
            updateScore();
        }
    }
});

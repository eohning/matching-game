//List of possible card values
const diwaliDeck = [
  {
    card: 1,
    img: "img/if_diwali_gifts_2670653.png",
    alt: Gift
  },
  {
    card: 2,
    img: "img/if_kalash_decorations_2670648.png",
    alt: Kalash
  },
  {
    card: 3,
    img: "img/if_kandeel_decorations_02_2670635.png",
    alt: Kandeel
  },
  {
    card: 4,
    img: "img/if_lamp_decorations_01_2670646.png",
    alt: Lamp
  },
  {
    card: 5,
    img: "img/if_patakas_decorations_2670644.png",
    alt: Patakas
  },
  {
    card: 6,
    img: "img/if_rangoli_decorations_2670643.png",
    alt: Rangoli
  },
  {
    card: 7,
    img: "img/if_rocket_fireworks_2670642.png",
    alt: Rocket
  },
  {
    card: 8,
    img: "img/if_shree_2670640.png",
    alt: Shree
  },
]


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
}

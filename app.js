// Psuedocode
//10 I'll code my reset function so that the player can try again.

//11 I'll make sure the render and initialize features work.

//12 I'll make sure everything is running properly and that there are no errors.

/*-------------------------------- Constants --------------------------------*/
const cardsArray = [
  {
    pokemon: "Alomomola",
    src: "./assets/alomomola.png",
    id: [0, 7],
    alt: "Alomomola Pokemon Card",
  },
  {
    pokemon: "Chansey",
    src: "./assets/chansey.jpg",
    id: [3, 5],
    alt: "Chansey Pokemon Card",
  },
  {
    pokemon: "Clefairy",
    src: "./assets/clefairy.jpg",
    id: [2, 15],
    alt: "Clefairy Pokemon Card",
  },
  {
    pokemon: "Jigglypuff",
    src: "./assets/jigglypuff.jpg",
    id: [4, 10],
    alt: "Jigglypuff Pokemon Card",
  },
  {
    pokemon: "LickiTung",
    src: "./assets/lickitung.png",
    id: [1, 9],
    alt: "LickiTung Pokemon Card",
  },
  {
    pokemon: "Mew",
    src: "./assets/mew.png",
    id: [6, 14],
    alt: "Mew Pokemon Card",
  },
  {
    pokemon: "Slowpoke",
    src: "./assets/slowpoke.png",
    id: [8, 11],
    alt: "Slowpoke Pokemon Card",
  },
  {
    pokemon: "Snubbull",
    src: "./assets/snubbull.png",
    id: [12, 13],
    alt: "Snubbull Pokemon Card",
  },
];

/*---------------------------- Variables (state) ----------------------------*/
let timer = 60; //seconds
let intervalId;
let flippedCards = [];
let matchedPairs = 0;
let totalPairs = 8;
let wasStartPressed = false;

/*------------------------ Cached Element References ------------------------*/
const secondsSpan = document.getElementById("seconds");
const messageEl = document.getElementById("message");
const cardsList = document.querySelectorAll(".card");
const imagesList = document.querySelectorAll(".disabled")

/*-------------------------------- Functions --------------------------------*/
const render = () => {
  if (timer === 0) {
    clearInterval(intervalId);
  }
  secondsSpan.textContent = timer;
  updateMessage();
};

const flipCard = (event) => {
  const foundCard = cardsArray.find((card) =>
    card.id.includes(parseInt(event.target.id))
  );
  let foundCardElement = document.getElementById(event.target.id);
  foundCardElement.src = foundCard.src;
  foundCardElement.alt = foundCard.alt;
  flippedCards.push(foundCardElement);
  if (flippedCards.length === 2) {
    checkForMatches();
  }
};

const checkForMatches = (event) => {
  console.log(flippedCards[0].src, flippedCards[1].src);
  if (flippedCards[0].src === flippedCards[1].src) {
    flippedCards[0].parentElement.removeEventListener("click", flipCard);
    flippedCards[1].parentElement.removeEventListener("click", flipCard);
    flippedCards = [];
    matchedPairs++;
  } else {
    setTimeout(() => {
      flippedCards[0].src = "./assets/backofcard.png";
      flippedCards[1].src = "./assets/backofcard.png";
      flippedCards = [];
    }, 500);
  }
};

const updateMessage = () => {
  if (timer === 0 && matchedPairs < totalPairs) {
    messageEl.innerText = "You lose.";
    clearInterval(intervalId);
  } else if (matchedPairs === totalPairs) {
    clearInterval(intervalId);
    messageEl.innerText = "You win!";
  }
  wasStartPressed = false;
};

const init = () => {
    intervalId = setInterval(() => {
        timer--;
        render();
    }, 1000);
};

const resetGame = () => {
    timer = 61;
    clearInterval(intervalId)
  init();
  imagesList.forEach((card) => {
    card.src = "./assets/backofcard.png";
    card.classList.remove("disabled")
  });
};

/*----------------------------- Event Listeners -----------------------------*/
cardsList.forEach((element) => {
  element.addEventListener("click", flipCard);
});

document.getElementById("reset").addEventListener("click", resetGame);

/*-------------------------------- Graveyard --------------------------------*/

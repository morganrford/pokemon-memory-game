/*-------------------------------- Constants --------------------------------*/
const cardsArray = [
  {
    pokemon: "Alomomola",
    src: "./assets/alomomola.png",
    id: [],
    alt: "Alomomola Pokemon Card",
  },
  {
    pokemon: "Chansey",
    src: "./assets/chansey.jpg",
    id: [],
    alt: "Chansey Pokemon Card",
  },
  {
    pokemon: "Clefairy",
    src: "./assets/clefairy.jpg",
    id: [],
    alt: "Clefairy Pokemon Card",
  },
  {
    pokemon: "Jigglypuff",
    src: "./assets/jigglypuff.jpg",
    id: [],
    alt: "Jigglypuff Pokemon Card",
  },
  {
    pokemon: "LickiTung",
    src: "./assets/lickitung.png",
    id: [],
    alt: "LickiTung Pokemon Card",
  },
  {
    pokemon: "Mew",
    src: "./assets/mew.png",
    id: [],
    alt: "Mew Pokemon Card",
  },
  {
    pokemon: "Slowpoke",
    src: "./assets/slowpoke.png",
    id: [],
    alt: "Slowpoke Pokemon Card",
  },
  {
    pokemon: "Snubbull",
    src: "./assets/snubbull.png",
    id: [],
    alt: "Snubbull Pokemon Card",
  },
];

/*---------------------------- Variables (state) ----------------------------*/
let timer = 90; //seconds
let intervalId;
let flippedCards = [];
let matchedPairs = 0;
let totalPairs = 8;
let wasStartPressed = false;

/*------------------------ Cached Element References ------------------------*/
const secondsSpan = document.getElementById("seconds");
const messageEl = document.getElementById("message");
const cardsList = document.querySelectorAll(".card");
const imagesList = document.querySelectorAll(".disabled");

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

const shuffleCards = (cards) => {
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  numbersArray.sort(() => {
    return Math.random() - 0.5;
  });
  console.log(numbersArray);
  cards.forEach((card) => {
    card.id.push(numbersArray.pop(), numbersArray.pop());
  });
  console.log(cards);
};

const init = () => {
  intervalId = setInterval(() => {
    timer--;
    render();
  }, 1000);
};

const resetGame = () => {
  timer = 91;
  clearInterval(intervalId);
  init();
  shuffleCards(cardsArray);
  imagesList.forEach((card) => {
    card.src = "./assets/backofcard.png";
    card.classList.remove("disabled");
  });
};

/*----------------------------- Event Listeners -----------------------------*/
cardsList.forEach((element) => {
  element.addEventListener("click", flipCard);
});

document.getElementById("reset").addEventListener("click", resetGame);

/*-------------------------------- Graveyard --------------------------------*/

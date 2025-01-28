// Psuedocode

//1 I'll define all of the required variables, leaving any empty as needed. 

//2 I'll store the cached element references using getbyID.

//3 I'll create the initialize game and render functions. 

//4 I'll handle each instead of the player clicking a button using a handleclick function.

//6 I'll code a way for the player to turn over the cards, which will change the image from the back of the pokemon card with the pokemon logo to the front with pokemon on it.

//7 I'll code a way for the program to recognize when a match has been made.

//8 I'll implement a way for the the player to only keep playing until the timer is up or until they have made too many incorrect matches.

//9 I'll code the message feature so that the player is able to view the current state of the game, such as whether their match was correct or incorrect, to keep going, or if they've lost.

//10 I'll code my reset function so that the player can try again. 

//11 I'll make sure the render and initialize features work. 

//12 I'll make sure everything is running properly and that there are no errors. 


/*-------------------------------- Constants --------------------------------*/
const cardsArray = [
    {
        pokemon: "Alomomola",
        src: "./assets/alomomola.png",
    },
    {
        pokemon: "Chansey",
        src: "./assets/chansey.jpg",
    },
    {   pokemon: "Clefairy",
        src: "./assets/clefairy.png",
    },
    {
        pokemon: "Jigglypuff",
        src: "./assets/jigglypuff.jpg",
    },
    {
        pokemon: "LickiTung",
        src: "./assets/lickitung.png",
    },
    {
        pokemon: "Mew",
        src: "./assets/mew.png",
    },
    {
        pokemon: "Slowpoke",
        src: "./assets/slowpoke.png",
    },
    {
        pokemon: "Snubbull",
        src: "./assets/snubull.png",
    },
];





/*---------------------------- Variables (state) ----------------------------*/
let timer = 10; //seconds
let intervalId;

/*------------------------ Cached Element References ------------------------*/
const secondsSpan = document.getElementById('seconds')
const messageEl = document.getElementById('message')

/*-------------------------------- Functions --------------------------------*/
const render = () => {
    if(timer === 0) {
        clearInterval(intervalId)
    } 
    secondsSpan.textContent = timer;
    // flipCard()
    // handleClick()
    // checkForMatches()
    // updateMessage()
}

const flipCard = (event) => {
//change the src file of the card when clicked
//can alt text be changed?
// document.getElementById("1").src="path";
}

const handleClick = (event) => {

}

const checkForMatches = (event) => {
//     if (1st card clicked ID === 2nd card clicked ID) {
//         change message to "You've made a match!"
//         and leave cards flipped
//         allow player to make next choice
//     } else { if cards don't match
//         flip cards back over
//         change message to "Try again!"
//         allow player to continue playing 
//     }
//     remove event listener once matched

// const unamedConst = event.target.removeEventListener
}

const updateMessage = () => {
//  if (timer === 0 || player has not made all matches
//     ) {
//     messageEl.innerText = "You lose."
//     } else {
//         messageEl.innerText = "You win!"
//     }
}

const init = () => {
    intervalId = setInterval(()=> {
        console.log(timer)
     timer--;
     render()
    }, 1000)
}

const resetGame = () => {
    
}

init()

/*----------------------------- Event Listeners -----------------------------*/
cardsArray.forEach(element => {
    //add event listeneres on all cards 
});

document.getElementById('reset').addEventListener('click', resetGame);




/*-------------------------------- Graveyard --------------------------------*/

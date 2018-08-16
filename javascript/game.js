/// array of ninja turtles character names
const words = [
        "leonardo", "donattello", "rafael", "michaelangelo", "splinter", "shredder", "april oniel", "casey jones", "rock steady", "bebop"
];
///// generate random word with underscores
let shuffleWords;
let underScores = "";
const dash = "_  ";
let guessesLeft = 8;
var usersguesses = [];
// create dashes for length of words//

function newGame() {
        let guessesLeft = 8;
        shuffleWords = words[Math.floor(Math.random() * words.length)];
        console.log(shuffleWords);
        let len = shuffleWords.length;
        underScores = dash.repeat(len);
        console.log(underScores);

        document.querySelector(".underScorescontainer").innerHTML = underScores;
}
let correct = [];
let incorrect = [];
document.addEventListener("keypress", (event) => {
        console.log(event.key);
        let userletter = event.key //key user typed
        let inputlower = (userletter.toLowerCase());
         if (guessesLeft !== 0) {
                usersguesses.push(inputlower);
                 //getting index of userinput against shuffle word;
                let words = []; //taking empty string to store positions.
                for (i = 0; i < shuffleWords.length; i++) //if 
                {
                if (shuffleWords[i] == inputlower)
                 words.push(i); //to push input to word if both characters are same.
                }
                console.log(words);
         }



})

newGame()
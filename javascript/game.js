// choosing a random word //
//create an array for turtle words//
const words=[
        "leonardo" , "donattello" , "rafael" , "michaelangelo" , "splinter" , "shredder" , "april oniel" , "casey jones" , "rock steady" , "bebop"
];
let wins=0;
let loss=0;
let wrongGuess = 0;
const guessesRemaining= 8;
const attempts = 8;
let userGuesses = [];
let underScores = "";
let shuffleWords;
const dash="_  ";
let newGame;

// create dashes for length of words//
function playGame(){
        
        shuffleWords = words[Math.floor(Math.random() * words.length)];
       
console.log(shuffleWords);

let len=shuffleWords.length;
underScores=dash.repeat(len);

console.log(underScores);
}

//start game test////
console.log(playGame());

document.querySelector(".underScorescontainer").innerHTML = underScores;
//
// keycode =o;
// arr=[length,e,o,r,o,da,o,]
// for(i=0;i<arr.length;i++){
//         if(kecode===arr[i]){
//                 get indexedDB,
//                 i,3,6
// =>o        }
// }
// --0--0


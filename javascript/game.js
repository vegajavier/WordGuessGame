/// array of ninja turtles character names
const words = [
	"leonardo", "donattello", "rafael", "michaelangelo", "splinter", "shredder", "april oniel", "casey jones", "rock steady", "bebop"
];
///// generate random word with underscores
// create dashes for length of words//
let shuffleWords;
let underScores = "";
const dash = "_ ";
let guessesLeft = 8;
let userGuesses = [];
function newGame() {
	shuffleWords = words[Math.floor(Math.random() * words.length)];
	console.log(shuffleWords);
	let len = shuffleWords.length;
	underScores = dash.repeat(len).split(" ");
	console.log(underScores);
	
	document.querySelector(".underScorescontainer").innerHTML = underScores;
}
document.addEventListener("keypress", (event) => {
	console.log(event.key);
	let userletter = event.key //key user typed
	let inputlower = (userletter.toLowerCase());
	if (guessesLeft !== 0) {
			userGuesses.push(inputlower);
			//getting index of userinput against shuffle word;
			let indexes = []; //taking empty string to store positions.
			for (let i = 0; i < shuffleWords.length; i++) {
				if (shuffleWords[i] === inputlower)
						indexes.push(i); //to push input to word if both characters are same.
						console.log(indexes);
				}
			
				for (let i = 0; i < indexes.length; i++) {
					let specificIndex = indexes[i];
					underScores[specificIndex] = userletter;
				}
	  
			console.log(underScores)
			document.querySelector(".underScorescontainer").innerHTML = userGuesses;

			

			let correct = [];
			let incorrect = [];



	}
})
newGame()
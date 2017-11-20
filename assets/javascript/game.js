


	var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var wins = 0;
	var losses = 0;
	var guesses = 9;
	var guessesLeft = 9;
	var guessesSoFar = 0;
	var lettersGuessed = [];
	var psychicLetter = null;

	var randomLetter = choices[Math.floor(Math.random() * choices.length)];
	

	var displayGuessesLeft = function () {
		
		document.querySelector("#Left").innerHTML = "Guesses Left: " + guessesLeft;
	};

	var pickPsychicLetter = function () {

		this.psychicLetter = this.choices[Math.floor(Math.random() * this.choices.length)];
		console.log('The answer is "' + psychicLetter + '", you cheater!');

	};

	var displayGuessesSoFar = function () {

		document.querySelector("#GuessCount").innerHTML = "Your Guesses so far: " + lettersGuessed.join(", ");
	};

	var reset = function() {

		guesses = 9;
		guessesLeft = 9;
		lettersGuessed = [];

		pickPsychicLetter();
		displayGuessesLeft();
		displayGuessesSoFar();

		
	}
	pickPsychicLetter();
	displayGuessesLeft();

	document.onkeyup = function (event) {
			guessesLeft--;
		var guess = String.fromCharCode(event.keyCode).toLowerCase();

		lettersGuessed.push(guess);
		// displayGuessesLeft();
		displayGuessesSoFar();

			if (guessesLeft > 0 && guess == psychicLetter){
				// if (guess == psychicLetter){
					wins ++;
					document.querySelector("#Wins").innerHTML = "Wins: " + wins;
					alert("Wow, You're Psychic!");
					console.log("Wins = " + wins);
					reset();
				// }
			}
			if (guessesLeft == 0 && guess !== psychicLetter) {
				losses++;
				document.querySelector("#Losses").innerHTML = "Losses: " + losses;
				alert("No more guesses, try again.");
				console.log("Losses = " + losses);
				reset();


			} else if (guessesLeft == 0 && guess == psychicLetter) {
					wins++;
					document.querySelector("#Wins").innerHTML = "Wins: " + wins;
					alert("Wow, You're Psychic!");
					console.log("Wins = " + wins);
					reset();
				}
			displayGuessesLeft();
	};



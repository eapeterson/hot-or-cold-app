
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--Choose a secret number--*/
	var secretNumber = Math.floor((Math.random() * 100) + 1);
		console.log (secretNumber);

	/*--Use input value and Add to list--NOT WORKING*/
  	$(".game").on("click", "#guessButton", function() {
  		var guessedNumber = $("input#userGuess").val();
  		var guessList = $("ul#guessList").val();
  		var text = $('#userGuess').val();
  		$('#userGuess').val('');
		if(text.length){
			$('<li />', {html:text}).prependTo(guessList);}
  	});
	


	/*--Start comparing number--*/
  	$(".game").on("click", "#guessButton", compareNumber);

  	function compareNumber (event) {

  		console.log ("function on");

  		var guessedNumber = $("input#userGuess").val();

  		if (guessedNumber == secretNumber) {
  			$("#feedback").text("Hooray, You Won!");
  		} else if (guessedNumber > secretNumber - 5 && guessedNumber < secretNumber + 5) {
  			$("#feedback").text("Scorching!");
  		} else if (guessedNumber <= secretNumber - 5 && guessedNumber > secretNumber - 10) {
  			$("#feedback").text("Hot");
  		} else if (guessedNumber >= secretNumber + 5 && guessedNumber < secretNumber + 10) {
  			$("#feedback").text("Hot");
  		} else if (guessedNumber <= secretNumber - 10 && guessedNumber > secretNumber - 20) {
  			$("#feedback").text("Warm");
  		} else if (guessedNumber >= secretNumber + 10 && guessedNumber < secretNumber + 20) {
  			$("#feedback").text("Warm");
  		} else if (guessedNumber <= secretNumber - 20 && guessedNumber > secretNumber - 30) {
  			$("#feedback").text("Chilly");
  		} else if (guessedNumber >= secretNumber + 20 && guessedNumber < secretNumber + 30) {
  			$("#feedback").text("Chilly");
  		} else if (guessedNumber >= secretNumber + 30 || guessedNumber <= secretNumber - 30) {
  			$("#feedback").text("Brr...Cold");
  		} else {
  			$("#feedback").text("Ice Cold");
  		}

  		/*if (guessedNumber == secretNumber) {
  			$("#feedback").text("Hooray, You Won!");
  		} else if (guessedNumber >= secretNumber + 30 || guessedNumber <= secretNumber - 30) {
  			$("#feedback").text("Brr...Freezing");
  		} else if (guessedNumber >= secretNumber + 20 && guessedNumber < secretNumber + 30) {
  			$("#feedback").text("Chilly");
  		} else if (guessedNumber <= secretNumber - 20 && guessedNumber > secretNumber - 30) {
  			$("#feedback").text("Chilly");
  		} else if (guessedNumber >= secretNumber + 10 && guessedNumber < secretNumber + 20) {
  			$("#feedback").text("Warm");
  		} else if (guessedNumber <= secretNumber - 10 && guessedNumber < secretNumber - 20) {
  			$("#feedback").text("Warm");
  		} else if (guessedNumber >= secretNumber + 5 && guessedNumber < secretNumber + 10) {
  			$("#feedback").text("Hot");
  		} else if (guessedNumber <= secretNumber - 5 && guessedNumber > secretNumber - 10) {
  			$("#feedback").text("Hot");
  		} else if (guessedNumber > secretNumber - 5 || guessedNumber < secretNumber + 5) {
  			$("#feedback").text("Scorching!");
  		}*/
  	};

	


  	/*--Counter increases--*/

  	var numberOfGuess = $("#count");

  	$("#guessButton").click(function(){
  		numberOfGuess.html(parseInt(numberOfGuess.html(), 10)+1);
  	});


  	//Possibly how to start new game
  	/*$(".new").click(function newGame (event) {
  		Math.floor((Math.random() * 100) + 1);

  	})*/

});

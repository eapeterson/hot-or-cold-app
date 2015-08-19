
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

	/*--To start new game--PARTIALLY WORKING*/
  	$(".clearfix").on("click", ".new", newGame);


  	function newGame () {

		var secretNumber = Math.floor((Math.random() * 100) + 1);
		console.log (secretNumber);
		//$("#userGuess").val('');
		//$("#guessList").val('');
		//$("#feedback").val("Make your Guess!");
	}


	/*--Use input value and Add to list--*/
  	$(".game").on("click", "#guessButton", function() {
  		var guessedNumber = $("input#userGuess").val();
  		var text = $('#userGuess').val();
  		$('#userGuess').val('');
		if(text.length){
			$('<li />', {html:text}).prependTo("#guessList");}
  	});
	


	/*--Start comparing number--NEED TO REFRESH MESSAGE EACH GUESS*/
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


  	
});

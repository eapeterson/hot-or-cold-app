
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

	/*--To start new game--*/
  	$(".clearfix").on("click", ".new", newGame);


  	function newGame () {

		var secretNumber = Math.floor((Math.random() * 100) + 1);
		console.log (secretNumber);
		$("#userGuess").val('');
		$("span").html("0");
		$("#guessList").empty();
		$("#feedback").text("Make your Guess!");
		
	};


	/*--Use input value and Add to list--*/
  	$(".game").on("click", "#guessButton", function() {
  		
  		guessedNumber = $("input#userGuess").val();
  
  		var text = $('#userGuess').val();
  		$('#userGuess').val('');
		if(text.length){
			$('<li />', {html:text}).prependTo("#guessList");}

		parseInt(text, 10);

		if (text%1 != 0) {
	 	alert("Please Enter a Number")
	 	}

		var delta = Math.abs(guessedNumber-secretNumber)
		compareNumber(delta);

		var numberOfGuess = $("#count");
		numberOfGuess.html(parseInt(numberOfGuess.html(), 10)+1);
  	});
	


	/*--Start comparing number--*/

  	function compareNumber (valueOfNumber) {

  	
  			console.log ("in function: " + valueOfNumber);

  		if (valueOfNumber == 0) {
  			$("#feedback").text("Hooray! You Won!")
  		} else if (valueOfNumber <= 5 && valueOfNumber > 0) {
  			$("#feedback").text("Scorching!");
  		} else if (valueOfNumber <= 10 && valueOfNumber > 5) {
  			$("#feedback").text("Hot");
  		} else if (valueOfNumber <=20 && valueOfNumber > 10) {
  			$("#feedback").text("Warm");
  		} else if (valueOfNumber <= 30 && valueOfNumber > 20) {
  			$("#feedback").text("Chilly");
  		} else if (valueOfNumber > 30) {
  			$("#feedback").text("Brr...Cold!");
  		} else {$("#feedback").text("Freezing");
  		};

  	};

  	
});

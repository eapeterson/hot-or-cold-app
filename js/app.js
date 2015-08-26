
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
  	//add prevent default to keep url from adding # at end


  	function newGame () {

		secretNumber = Math.floor((Math.random() * 100) + 1);
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

  		var msg = "";

  		if (valueOfNumber === 0) {
  			msg = "Hooray! You Won!";
  		} else if (valueOfNumber <= 5) {
  			msg = "Scorching!";
  		} else if (valueOfNumber <= 10) {
  			msg = "Hot";
  		} else if (valueOfNumber <=20) {
  			msg = "Warm";
  		} else if (valueOfNumber <= 30) {
  			msg = "Chilly";
  		} else if (valueOfNumber > 30) {
  			msg = "Brr...Cold!";
  		};

  		$("#feedback").text(msg);
  	};

  	
});

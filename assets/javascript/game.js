$(document).ready(function() {


	var compPick = Math.floor(Math.random() * 120) + 19; 
		console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

	//VAR STONES

	var stoneOne = Math.floor(Math.random() * 12) + 1; 
		console.log("Stone 1: " + stoneOne); 
		$("#img1").html("<img src=" + "assets/images/stone1.png" + " value=" + stoneOne + ">"); 

	var stoneTwo = Math.floor(Math.random() * 12) + 1; 
		console.log("Stone 2: " + stoneTwo); 
		$("#img2").html("<img src=" + "assets/images/stone2.png" + " value=" + stoneTwo + ">"); 

	var stoneThree = Math.floor(Math.random() * 12) + 1; 
		console.log("Stone 3: " + stoneThree); 
		$("#img3").html("<img src=" + "assets/images/stone3.png" + " value=" + stoneThree + ">");
	
	var stoneFour = Math.floor(Math.random() * 12) + 1; 
		console.log("Stone 4: " + stoneFour); 
		$("#img4").html("<img src=" + "assets/images/stone4.png" + " value=" + stoneFour + ">");
	
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 


	//GAME FUNCTION
	
	function reset () {
		compPick = Math.floor(Math.random() * 120) + 19; 
			console.log("compPick: " + compPick); 
		$(".randomNumber").html(compPick); 

		score = 0; 
		$(".scoreDisplay").html(score); 

		stoneOne = Math.floor(Math.random() * 12) + 1;  
			console.log("Stone 1: " + stoneOne); 
		$("#img1").html("<img src=" + "assets/images/stone1.png" + " value=" + stoneOne + ">");

		stoneTwo = Math.floor(Math.random() * 12) + 1; 
			console.log("Stone 2: " + stoneTwo); 
		$("#img2").html("<img src=" + "assets/images/stone2.png" + " value=" + stoneTwo + ">"); 

		stoneThree = Math.floor(Math.random() * 12) + 1; 
			console.log("Stone 3: " + stoneThree); 
		$("#img3").html("<img src=" + "assets/images/stone3.png" + " value=" + stoneThree + ">");
	
		stoneFour = Math.floor(Math.random() * 12) + 1; 
			console.log("Stone 4: " + stoneFour); 
		$("#img4").html("<img src=" + "assets/images/stone4.png" + " value=" + stoneFour + ">");

		$("img").on("click", function () {
			var newScore = score += parseInt($(this).attr("value")); 
				console.log("New Score: " + newScore); 
			$(".scoreDisplay").html(newScore); 

			if(newScore === compPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(newScore > compPick) {
				losses++ ; 
				$(".losses").html("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}

		}); 



	}

	//FINAL GAME FUNCTION
	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 






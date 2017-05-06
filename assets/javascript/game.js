$( document ).ready(function() {
	var obiScore = [120, 8, 25]; 
	var maceScore = [100, 5, 5];
	var sidScore = [150, 15, 20];
	var maulScore = [180, 8, 25];
	var characterScore = [];
	var defenderScore = [];
	var wins = 0;



	var firstMove = true;
	var secondMove = false;


	$("#obiS").html(obiScore[0]);
	$("#maceS").html(maceScore[0]);
	$("#sidS").html(sidScore[0]);
	$("#maulS").html(maulScore[0]);

	$("#choose").html("Choose Your Character!");


	function characterSelect(charDiv) {
			charDiv.appendTo("#character");
	};

	function enemySelect(charDiv) {
			charDiv.appendTo("#enemies");
			charDiv.css({"background-color": "red"});
			charDiv.css({"border-color": "black"});
	};
	function defenderSelect(charDiv) {
			charDiv.appendTo("#defender");
			charDiv.css({"background-color": "black"});
			charDiv.css({"border-color": "red"});
			charDiv.css({"color": "red"});
	};
	function fight() {
		characterScore[0] = (characterScore[0] - defenderScore[2]);
		defenderScore[0] = (defenderScore[0] - characterScore[1]);
		characterScore[1] = (characterScore[1] + baseA);
		characterS.html(characterScore[0]);
		defenderS.html(defenderScore[0]);
		$("#aWords").html("You attacked " + d + " for " + characterScore[1] + " damage!");
		$("#dWords").html(d + " counter-attacked you for " + defenderScore[2] + " damage!");
		console.log(characterScore);
		console.log(defenderScore);
	};

	//selectors for character divs
	var selObi = $('#obi');
	var selMace = $('#mace');
	var selSid = $('#sid');
	var selMaul = $('#maul');

	//selectors for character scores
	var selObiS = $('#obiS');
	var selMaceS = $('#maceS');
	var selSidS = $('#sidS');
	var selMaulS = $('#maulS');

	//click functions
	$("#obi").click(function() {
  		if (firstMove) {
  			characterSelect(selObi);
  			enemySelect(selMace);
  			enemySelect(selSid);
  			enemySelect(selMaul);
  			firstMove = false;
  			secondMove = true;
  			$("#choose").html("");
  			characterScore = obiScore;
  			selObiS.html(characterScore[0]);
  			characterS = selObiS;
  			character = selObi;
  			a = "obi-wan";
  			baseA = obiScore[1];
  		}
  		else if (secondMove) {
  			defenderSelect(selObi);
  			secondMove = false;
  			defenderScore = obiScore;
			selObiS.html(defenderScore[0]);
			defender = selObi;
			defenderS = selObiS;
			d = "obi-wan";
  		}
	});
	$("#mace").click(function() {
		if (firstMove) {
  			characterSelect(selMace);
  			enemySelect(selObi);
  			enemySelect(selSid);
  			enemySelect(selMaul);
  			firstMove = false;
  			secondMove = true;
  			$("#choose").html("");
  			characterScore = maceScore;
  			selMaceS.html(characterScore[0]);
  			characterS = selMaceS;
  			character = selMace;
  			a = "Mace Windu";
  			baseA = maceScore[1];
  		}
  		else if (secondMove) {
  			defenderSelect(selMace);
  			secondMove = false;
  			defenderScore = maceScore;
  			selMaceS.html(defenderScore[0]);
  			defender = selMace;
  			defenderS = selMaceS;
  			d = "Mace Windu";
  		}
	});
	$("#sid").click(function() {
		if (firstMove) {
			characterSelect(selSid);
			enemySelect(selObi);
  			enemySelect(selMace);
  			enemySelect(selMaul)
			firstMove = false;
  			secondMove = true;
  			$("#choose").html("");
  			characterScore = sidScore;
  			selSidS.html(characterScore[0]);
  			characterS = selSidS;
  			character = selSid;
  			a = "Darth Sidious";
  			baseA = sidScore[1];
		}
  		else if (secondMove) {
  			defenderSelect(selSid);
  			secondMove = false;
  			defenderScore = sidScore;
  			selSidS.html(defenderScore[0]);
  			console.log(defenderScore);
  			defenderS = selSidS;
  			defender = selSid;
  			d = "darth Sidious";
  		}
	});
	$("#maul").click(function() {
		if (firstMove) {
  			characterSelect(selMaul);
  			enemySelect(selObi);
  			enemySelect(selSid);
  			enemySelect(selMace)
  			firstMove = false;
  			secondMove = true;
  			$("#choose").html("");
  			characterScore = maulScore;
  			selMaulS.html(characterScore[0]);
  			selMaulS.html(characterScore[0]);
  			character = selMaul;
  			characterS = selMaulS;
  			a = "Darth Maul";
  			baseA = maulScore[1];
  		}
  		else if (secondMove) {
  			defenderSelect(selMaul);
  			secondMove = false;
  			defenderScore = maulScore;
  			selMaulS.html(defenderScore[0]);
  			defender = selMaul;
  			defenderS = selMaulS;
  			d = "Darth Maul";
  		}
	});
	function battleCheck() {
		if (defenderScore[0] <= 0) {
			defenderScore = [];
			alert("choose another enemy");
			defender.remove();
			secondMove = true;
			wins++;
		} 
		else if (characterScore[0] <= 0){
			alert("you lose");
			alert("refresh page to try again")
		} 
		else {
			fight();
		}
	}

	function finishCheck(){
		if (wins === 3) {
			alert("You have defeated all the enemies!")
		}
	}
	$('#fight').click(function() {
		battleCheck();
		finishCheck();
	});
});

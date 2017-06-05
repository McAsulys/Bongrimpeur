//Environement VAR :
var fail = 0;
var attempt = 0;
var terrain =  new Array;
init();
display();
function init(){
	terrain = [1,0,0,0,0,0,0,0];
	document.getElementById("croix1").style = "display : none;";
	document.getElementById("croix2").style = "display : none;";
	document.getElementById("croix3").style = "display : none;";
}
function er(what){
	if(what != null){
		alert(what);
	}
	else{
		alert("ERROR");
	}
}
function piece(){
	result = Math.round(Math.random());
	return result;
}
function choose(choix){
	if(choix != 0 && choix != 1){ //0 = face ; 1 = pile
		er("WrongChoice");
	}
	else{
		if(piece() == choix){
			resultGame = "gagné"
			var a = WhereIAM(); //a = position du joueur
			terrain[a] = 0;
			terrain[a+1] = 1;
			fail = 0;
			
		}
		else {
			var a = WhereIAM();
			resultGame = "perdu"
			if(a != 0){ //pour l'emecher de sortir du tableau par le début.
				terrain[a] = 0;
				terrain[a-1] = 1;
			}
			fail++;
		}
		attempt++;
		if(fail == 3){
			resultGame = "Game Over";
			document.getElementById("replay").style = "display : inline-block;";
			document.getElementById("piecepile").disabled = true;
			document.getElementById("pieceface").disabled = true;
		}
		if(WhereIAM() == terrain.length - 1){
			resultGame = "Winner";
			document.getElementById("replay").style = "display : inline-block;";
			document.getElementById("piecepile").disabled = true;
			document.getElementById("pieceface").disabled = true;
		}
		display();
	}
}
function WhereIAM(){
	for(i=0;i<=terrain.length;i++){
		if(terrain[i] == 1){
			return i;
		}
	}
	er("le perso est null part");
}
function display(){
	document.getElementById("tab").value = terrain.join();
	document.getElementById("fail").value = fail;
	document.getElementById("resultGame").value = resultGame;
	if(fail = 0){
		document.getElementById("croix1").style = "display : none;";
		document.getElementById("croix2").style = "display : none;";
		document.getElementById("croix3").style = "display : none;";
	}

}
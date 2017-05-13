//Environement VAR :
var fail = 0;
var attempt = 0;
var terrain =  new Array;
init();
display();
function init(){
	terrain = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0];
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
		er("WeongChoice");
	}
	else{
		if(piece() == choix){
			alert("gagné");
			var a = WhereIAM(); //a = position du joueur
			terrain[a] == 0;
			alert(terrain[a]); //la modification du tableau ne focntione pas. 
			terrain[a+1] == 1;
			
		}
		else {
			if(fail >= 3){
				var a = WhereIAM();
				terrain[a] = 0;
				terrain[0] = 1;
			}
			var a = WhereIAM();
			alert("perdu");
			terrain[a] == 0;
			terrain[a-1] == 1;
			fail++;
		}
		attempt++;
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
}
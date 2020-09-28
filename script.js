var connexion = document.getElementById("connexion");
var inscription = document.getElementById("inscription");
var changeTitle = document.getElementById("changeTitle");
var buttons =[connexion,inscription];
for (var button of buttons){
  button.addEventListener("click", function(){
    if(changeTitle.innerHTML == "Connexion"){
      changeTitle.innerHTML ="Mon compte";
    }
  })
}

var inscription = document.getElementById("inscription");


var quantity= document.getElementById("quantity");
var age = document.getElementById("age");
var reason = document.getElementById("raison");
var publication = document.getElementById("publication");


var main = document.querySelector("main");
var dons = [
    {image:"hemerocale.jpg",nom:"hemerocale",quantite:"2 touffes",age:"3 ans",raison:"devenu trop étendu"},
    {image:"hydrangea.jpg",nom:"hydrangea",quantite:"10 fleurs",age:"d'aujourdui",raison:"fleurs coupées pour faire un bouquet"},
    {image:"rose.jpg",nom:"rose",quantite:"un plant",age:"3 ans",raison:" changement de par-terre"},
    {image:"aster.jpg",nom:"aster",quantite:"grosse touffe",age:"2 ans",raison:"trop dévelopé"}
];


publication.addEventListener("click", function (e) {
       e.preventDefault();
    var name = document.getElementById("nom_plante");
    console.log(dons);
    console.log(name.value);
 dons.push({nom:name.value});
 
 
 
  
    }
  );
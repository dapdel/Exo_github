var inscription = document.getElementById("inscription");
var main = document.querySelector("main");
var dons = [
    {image:"hemerocale.jpg",nom:"hemerocale",quantite:"2 touffes",age:"3 ans",raison:"devenu trop étendu"},
    {image:"hydrangea.jpg",nom:"hydrangea",quantite:"10 fleurs",age:"d'aujourdui",raison:"fleurs coupées pour faire un bouquet"},
    {image:"rose.jpg",nom:"rose",quantite:"un plant",age:"3 ans",raison:" changement de par-terre"},
    {image:"aster.jpg",nom:"aster",quantite:"grosse touffe",age:"2 ans",raison:"trop dévelopé"}
]
for (var don of dons) {
    var leHTMLdunDon = `

    <div class="don">
    <div class="plante">
      <img
        class="image_de_plante"
        src="${don.image}"
        alt="${don.nom}"
      />
    </div>
    <div class="centre">
      <h3>Hydrangea</h3>
      <p><b>quantité:</b> ${don.quantite}</p>
      <p><b>âge:</b> ${don.age}</p>
      <p><b>raison:</b>${don.raison}</p>
    </div>
    <div class="bouton"><button>Contacter le vendeur</button></div>
  </div>
    <br/>
        `;

    main.innerHTML += leHTMLdunDon;
  }
;
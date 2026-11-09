// Constantes
const ecranAccueil = document.getElementById("ecranAccueil")
const ecranChrono = document.getElementById("ecranChrono")

const btnDemarrer = document.getElementById("demarrer")
const btnRetour = document.getElementById('retourAccueil')

// Variables


// Afficher l'ecran actif
const afficher = (ecran) => {
    ecranAccueil.classList.add('cache')
    ecranChrono.classList.add('cache')
    ecran.classList.remove('cache')
}





btnDemarrer.addEventListener("click", () =>{
  afficher(ecranChrono)
})

btnRetour.addEventListener("click", () =>{
  afficher(ecranAccueil)
})
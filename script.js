import { readFileSync, existsSync, writeFileSync } from 'fs'
import { join } from 'path'
import { homedir } from 'os'
import readline from 'readline'
import { afficher } from "./utils.js"

// Constantes
const ecranAccueil = document.getElementById("ecranAccueil")
const ecranChrono = document.getElementById("ecranChrono")

const btnDemarrer = document.getElementById("demarrer")
const btnRetour = document.getElementById('retourAccueil')

// Variables




// =================== //
// Ecouteur d'évênements
// =================== //

// Récupérer via Semaine6/kataweb5

btnDemarrer.addEventListener("click", () =>{
  afficher(ecranChrono)
})

btnRetour.addEventListener("click", () =>{
  afficher(ecranAccueil)
})
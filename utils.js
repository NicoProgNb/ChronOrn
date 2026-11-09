// Afficher l'ecran actif
export const afficher = (ecran) => {
    ecranAccueil.classList.add('cache')
    ecranChrono.classList.add('cache')
    ecran.classList.remove('cache')
}
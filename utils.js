// Afficher l'ecran actif
export const afficher = (ecran) => {
    document.querySelectorAll('.ecran').forEach(e => e.classList.add('cache'))
    ecran.classList.remove('cache')
}
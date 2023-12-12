/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */







function afficherResultat(score, nbMotsProposes) {
    let zoneScore = document.querySelector(".zoneScore span")
    result = `${score} / ${nbMotsProposes}`
    zoneScore.innerText = result
} 

function afficherProposition(proposition){

    let zoneProposition = document.querySelector(".zoneProposition")
    let validation = document.getElementById('btnValiderMot')
    

    if (proposition === undefined){
    zoneProposition.innerText = "Le jeu est terminé"
    validation.disabled = true
    } else{
    zoneProposition.innerText = proposition
    validation.disabled = false}
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

function lancerJeu() {
    // Initialisations
    let score = 0
    let i = 0
    let listeProposition = listeMots

    let validation = document.getElementById('btnValiderMot')
    let inputEcriture = document.getElementById('inputEcriture')
    afficherProposition(listeProposition[i])
    
    validation.addEventListener ("click", () => {
        if(inputEcriture.value === listeProposition[i]){
            score ++}
        i++
        afficherResultat(score, i)
        inputEcriture.value= ''
        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini !")
            validation.disabled = true }
            else {
                afficherProposition(listeProposition[i])
            }
        }
            
        
    )



    let button = document.querySelectorAll(".optionSource input")


    for(let index = 0; index < button.length; index++) {

    button[index].addEventListener("change", (event) => {

        if(event.target.value === "1") {
            listeProposition = listeMots
        } else {
            listeProposition = listePhrases
        }
        afficherProposition(listeProposition[i])
    })
}

    afficherResultat(score, i)
}

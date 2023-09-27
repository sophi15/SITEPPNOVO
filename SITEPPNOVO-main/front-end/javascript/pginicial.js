// teste card
var cardcontainer = document.getElementById("cardcontainer");
var cardsobre = document.getElementById("cardsobre");

function mostrarCard() {
    cardcontainer.style.left = "0"; /* Move o card para a posição visível */
}

function esconderCard() {
    cardcontainer.style.left = "-300px"; /* Move o card para fora da tela */
}

document.getElementById("sobrecard").addEventListener("mouseenter", mostrarCard);
document.getElementById("sobrecard").addEventListener("mouseleave", esconderCard);

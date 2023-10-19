// botao pg sobre
document.getElementById("PaginaSobre").addEventListener("click", function() {
    window.location.replace("../sobre/Sobre.html");
});

// botao dos coments

document.getElementById("botaoComentarios").addEventListener("click", function() {
    
    // Rola até a div de comentários usando a âncora
    document.getElementById("comentsDiv").scrollIntoView({ behavior: "smooth" });
});




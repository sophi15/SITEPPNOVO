// botao pg sobre
document.getElementById("PaginaSobre").addEventListener("click", function() {
    window.location.replace("../sobre/Sobre.html");
});

// botao dos coments

document.getElementById("botaoComentarios").addEventListener("click", function() {
    
    // Rola até a div de comentários usando a âncora
    document.getElementById("comentsDiv").scrollIntoView({ behavior: "smooth" });
});


// sessao dos comentários

// Função para enviar comentário
function submitComment() {
    var username = document.getElementById("username").value;
    var commentText = document.getElementById("comment").value;
  
    if (username && commentText) {
      // Criar um objeto de comentário
      var comment = {
        username: username,
        text: commentText
      };
    }
}  

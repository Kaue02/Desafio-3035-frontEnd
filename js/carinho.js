const carrinho = [];

function adicionarAoCarrinho(nomeProduto, valorProduto) {

    const itemAdicionado = {
        "nomeProduto" : nomeProduto,
        "valor" : valorProduto
    }

    carrinho.push(itemAdicionado);

    localStorage.setItem("itens do carinho", JSON.stringify(carrinho));

    var mensagem = document.getElementById("mensagem");
    mensagem.innerText = nomeProduto + " foi adicionado ao carrinho!";
    mensagem.style.backgroundColor = "black";
    mensagem.style.display = "block";

    setTimeout(function() {
        mensagem.style.display = "none";
    }, 3000);
}
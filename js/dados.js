const form = document.getElementById("novoItem");
const lista = document.getElementById("dadosSimplificados")
const dados = [];
var porte = "";

function pegarValorRadio() {
    var radioSelecionado = document.querySelector('input[name="porte"]:checked');
    porte = radioSelecionado.value;
    return porte;
}

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    var nomeDono = evento.target.elements["nome__dono"];
    var numero = evento.target.elements["numero__dono"];
    var endereco = evento.target.elements["endereco"];
    var data = evento.target.elements["data"];
    var nomePet = evento.target.elements["nome__pet"];
    var idade = evento.target.elements["idade"];
    var porteAtual = pegarValorRadio();

    criaElemento(nomeDono.value, numero.value, endereco.value, data.value, nomePet.value, idade.value, porteAtual);
    
    nomeDono.value = "";
    numero.value = "";
    endereco.value = "";
    data.value = "";
    nomePet.value = "";
    idade.value = "";
})


function criaElemento(donoNome, numero, endereco, data, petNome, idade, porte){

    const dadoAtual = {
        "nomeDono": donoNome,
        "numero": numero,
        "endereco": endereco,
        "data": data,
        "nomePet": petNome,
        "idade": idade,
        "porte": porte
    }
    dados.push(dadoAtual);

    localStorage.setItem("dados", JSON.stringify(dados));
    
}

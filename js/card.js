const modal = document.querySelector("dialog");
const main = document.querySelector("body");
const lista = document.getElementById("dadosSimplificados");
const stringJSON = localStorage.getItem("dados");
const fechar = document.querySelector("#botao");
const arrayJson = JSON.parse(stringJSON);
for (let i = 0; i < arrayJson.length; i++) {

    var valor = arrayJson[i];
    const data = "Data do Atendimento " + valor.data;
    const petNome = "Nome do pet: " + valor.nomePet;

    const dadoSimples = document.createElement('li');
    
    dadoSimples.classList.add('dado-simples');
    const h2 = document.createElement('h2');
    const p = document.createElement("p");
    p.classList.add("paragrafo_data")
    h2.classList.add("paragrafo_nomePet")
    dadoSimples.appendChild(h2);
    dadoSimples.appendChild(p);
    h2.innerHTML = petNome;
    p.innerHTML = data;

    var div = document.createElement("div");
    div.classList.add("card");
    div.appendChild(dadoSimples);
    lista.appendChild(div);
    dadoSimples.addEventListener("click", () => {
        openModal(i);
    })
}
//  data, nomePet, nomeDono, endereco, idade, numero, porte
function openModal(position) {

    const v = arrayJson[position];
    
    modal.showModal();

    mData = document.getElementById("data");
    mNomePet = document.getElementById("nomePet");
    mNomeDono = document.getElementById("nomeDono");
    mEndereco = document.getElementById("endereco");
    mIdade = document.getElementById("idade");
    mNumero = document.getElementById("numero");
    mPorte = document.getElementById("porte");

    mData.innerHTML = v.data;
    mNomePet.innerHTML = v.nomePet;
    mNomeDono.innerHTML = v.nomeDono;
    mEndereco.innerHTML = v.endereco;
    mIdade.innerHTML = v.idade;
    mNumero.innerHTML = v.numero;
    mPorte.innerHTML = v.porte;


    setTimeout(function () {
        modal.close();
    }, 500000);
}

fechar.onclick = function (){
    modal.close();
}


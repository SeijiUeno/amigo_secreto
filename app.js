let amigos = [];

function exibeTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
function adicionarAmigo() {
    let inputDoAmigo = document.getElementById(`amigo`);
    let nome = inputDoAmigo.value.trim();

    if (amigos.includes(nome)) {
        alert(`error -Nome Já existe.`);
        return;
    }
    if (nome=== "") {
        alert(`error - insira um nome válido.`);
        return;
    }
    amigos.push(nome);
    exibirListaAmigos();
    limparCampo();
}

function exibirListaAmigos() {
    let listaAmigos = document.getElementById(`listaAmigos`);

    listaAmigos.innerHTML = ``;

    amigos.forEach(amigo => {
        let item = document.createElement(`li`);
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    })
}

function exibirResultado(amigoSecretoSorteado) {
    let listaSorteado = document.getElementById(`resultado: `);
    listaSorteado.innerHTML = ``;

    let li = document.createElement(`li`);
    li.textContent = `${amigoSecretoSorteado} foi sorteado!.`;
    listaSorteado.appendChild(li);
}

function sortear() {
    if (amigos.length < 3) {
        alert(`São necessários pelo menos 3 participantes para realizar o sorteio!`);
        return;
    }

    limparListaAmigos()

    let sorteio = Math.floor(Math.random() * amigos.length);
    let resultado = amigos[sorteio];

    exibirResultado(resultado);
}

function limparCampo() {
    inputDoAmigo = document.querySelector(`input`);
    inputDoAmigo.value = ``;
}

function limparListaAmigos() {
    let listaAmigos = document.getElementById(`listaAmigos`);
    let listaSorteado = document.getElementById(`resultado`);
    
    listaAmigos.innerHTML = ``;
    listaSorteado.innerHTML = ``;
}

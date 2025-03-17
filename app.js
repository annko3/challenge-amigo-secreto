// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let agregarAmigo = document.getElementById("amigo").value;

    if (agregarAmigo === ""){
        alert("Por favor, inserte un nombre")
    }else{
        amigos.push(agregarAmigo)
        document.getElementById("amigo").value = "";
        listaAmigos();
    }
}

function listaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let agregarAmigo of amigos) {
        let agregaLi = document.createElement("li"); 
        agregaLi.textContent = agregarAmigo; 
        lista.appendChild(agregaLi)
        
    }
}
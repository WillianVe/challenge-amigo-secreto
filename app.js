// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos=[];
let amigo=document.getElementById('amigo');
let listaAmigos=document.getElementById('listaAmigos');



function agregarAmigo(){
    let nombreAmigo=amigo.value
    if(nombreAmigo==""){
        alert("Por favor, inserte un nombre.")
        return;
    }
    listaDeAmigos.push(nombreAmigo);
    listaAmigos.innerHTML += `<li>${amigo.value}</li>`;
    amigo.value=""
}

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
    amigo.value=""
    actualizarLista();
};

//function sortearAmigo(){
    //let numeroRandom=Math.floor(Math.random()*listaDeAmigos.length);
    //let amigoSecreto=listaAmigos[numeroRandom]
//}

function actualizarLista(){
    listaAmigos.innerHTML=""
    for(let i=0; i<listaDeAmigos.length; i++){
        listaAmigos.innerHTML+=`<li>${listaDeAmigos[i]}</li>`
    }
}
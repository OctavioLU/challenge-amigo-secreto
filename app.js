// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];
let lu = document.getElementById('listaAmigos');

function limpiarInput(){
    document.getElementById('amigo').value = '';
    
}

function agregarAmigo(){

    let nombreIngresado = '';
    nombreIngresado = document.getElementById('amigo').value;
   
    if (nombreIngresado == ''){
        alert ('Por favor, ingrese un nombre');
    }else{
        nombreAmigos.push(nombreIngresado);
    }
    console.log(nombreAmigos);
    lu.innerHTML = '';
    agregarEnLista(nombreAmigos);
    limpiarInput();
    return;
}

function agregarEnLista(nombre){

    //let lista = document.getElementById('listaAmigos');
    //lista.innerHTML = nombre
    for (let i = 0; i<nombreAmigos.length;i++){
        
        let elementoLista = document.createElement('li');
        
        let elementoDeLista = lu.appendChild(elementoLista);

        elementoDeLista.textContent = nombre[i];
        
    }
    return;
}

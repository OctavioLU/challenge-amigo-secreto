// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreAmigos = [];

function agregarAmigo(){
    let nombreIngresado = '';
    nombreIngresado = document.getElementById('amigo').value;
    if (nombreIngresado == ''){
        alert ('Por favor, ingrese un nombre');
    }else{
        nombreAmigos.push(nombreIngresado);
    }
    console.log(nombreAmigos);
    limpiarInput();
    return;
}
function limpiarInput(){
    document.getElementById('amigo').value = '';
}
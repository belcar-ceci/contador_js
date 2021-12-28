const contador = document.getElementById("contar");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const reset = document.getElementById("reset");

let numero = 0;

//console.log("🧑");

//SUMADO
function sumar(){
    numero++;
    contador.innerHTML = numero;
}
suma.addEventListener("click", sumar);

/*sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});*/

//RESTANDO
function restar(){
    if(numero==0){
        return true;
    }else {
        numero--;
        contador.innerHTML = numero;
    }
}
resta.addEventListener("click", restar);

/*restar.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }

}); */

//REINICIAR
function reload(){
    numero = 0;
    contador.innerHTML = numero;
}
reset.addEventListener("click", reload);
/*reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
});*/


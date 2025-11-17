let posicion = -810;
let posicion2 = -8100;

const intervalo = setInterval(() => {
    const nNumero = document.getElementById("eDivNumero");

    console.log("hola");
    
    if (posicion === 0){
        clearInterval(intervalo);
    } else{
        posicion += 90;
        nNumero.style.backgroundPositionX = posicion + "px";
    }

},1000);

const intervalo2 = setInterval(() => {
    const nNumero2 = document.getElementById("eDivNumero2");

    console.log("hola");
    
    if (posicion === 0){
        posicion += 90;
        nNumero2.style.backgroundPositionX = posicion + "px";
    }

},10000);
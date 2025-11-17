let posicion = -810;
const intervalo = setInterval(() => {
    const nDivNumero = document.getElementById("eDivCrono");
    const nP = document.getElementById("ePContinuar");

    if (posicion === 0){
        clearInterval(intervalo);
        const nText = document.createTextNode("Adelante");
        nP.appendChild(nText);
    }

    posicion += 10;
    nDivNumero.style.backgroundPositionX = posicion + "px";
},80)
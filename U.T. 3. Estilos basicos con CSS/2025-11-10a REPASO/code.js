document.querySelector("button")
    .addEventListener("click", _ => {
        // const nodos = document.querySelectorAll("[type=radio]:checked");
        // console.log(nodos);
        const chequeados = document.querySelector('[type="checkbox"]:checked');
        // const continenteId = chequeado.value;
        let continentesIds = "";
        chequeados.forEach(chequeado => continentesIds += chequeado.value + ",");
        window.location = "continente.html=continente=" + continentesIds;
    });

    

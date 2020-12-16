

function drawCard(characters) {

    const rickMarty = document.querySelector("#containerFinal")

    

    characters.forEach((character) => {
       
        // !! De aquí borré la función swapClasses

        const rickyDiv = document.createElement('div');
        
        rickyDiv.className = 'container';
        
        // !! Al div con clase "properties", le añadí otra clase para diferenciarlo del resto y trabajar con clases (ya que los ids deberían ser únicos)"

        rickyDiv.innerHTML = `
        
        <div class="flexClass">
        <div id="characterName"  class="properties">${character.name}</div>
        <div id="statusId" class="properties status">${character.status}</div>
        </div>
        <div>
        <img src="${character.image}" alt="${character.name}">
        </div>
        <div class="flexClass">
        <div class="properties">${character.species}</div>
        <div class="properties">${character.gender}</div>
        </div>
        <div class="location">${character.location.name}</div>
        <div id = "ver" class="linkToCard"><a href="character.html?id=${character.id}" target="_blank">Ver personaje</a><div>
        `
        rickMarty.append(rickyDiv);
    });
    
    // !! Una vez que injecté el HTML de manera dinámica, capturo la colección de elementos con la que me interesa trabajar (en este caso los divs cuya clase es "status"), al final, esto me va a devolver una HTMLcollection, que es algo parecido a un array y se lo puede tratar de la misma forma, acepta los mismo métodos. 
    const statusClass = document.querySelectorAll('.status');

    // !! declaro aquí la función (aunque también podría declararla fuera de drawCard)

    const swapClasses = (element, add, remove) => {
        element.classList.add(add);
        element.classList.remove(remove);
    };

    // !! vuelvo a tomar el array de personajes y le hago un nuevo forEach, donde comparo el character.status con "Dead" y luego invoco la función swapClasses pasándole como primer argumento el elemento de statusClass cuyo index coincide con el index de mi personaje. 

    characters.forEach((character, i) => character.status === "Dead" ? swapClasses(statusClass[i], "dead", "alive") : swapClasses(statusClass[i], "alive", "dead"))            
}

// !! Esta es una solución que encontré al problema de cambiar las clases. El problema de capturar un elemento del DOM a través de su id con querySelector(), es que siempre te va a tomar solamente el primer elemento que posea esa id y va a ignorar el resto. En cada vuelta del forEach tu código estaba capturando siempre el primer statusId, por eso solo el cambio de clase se estaba aplicando en el primer div con ese id (que tampoco era apreciable, ya que por defecto todas tus clases eran "properties alive"). La función swapClasses está funcionando bien 🤓
        

let characterURL = 'https://rickandmortyapi.com/api/character'

// let nextUrl= ""

//lo siguiente la que le pide la información la formatea pero no la dibuja la guarda en la const formattedCharacters
function getCharacters() {
    return fetch(characterURL)
        .then(res => res.json())
        .then((apiData) => {
            console.log("respuesta de fetch", apiData)
            characterURL = apiData.info.next
            console.log("muestra url por cada vuelta:", characterURL)
            const formattedCharacters
                = apiData.results.map((ele, i) => {

                    return {
                        id: ele.id,
                        name: ele.name,

                        status: ele.status,
                        species: ele.species,
                        gender: ele.gender,
                        location: {
                            name: ele.location.name
                        },
                        image: ele.image,
                    }
                });
            return formattedCharacters
        })
}
//lo siguiente es lo que dibuja la información
getCharacters()
    .then(characters => {
        console.log(characters)
        // De aquí para abajo mantenemos lo que teníamos para pintar...
        // drawCards(characters)
        drawCard(characters)
    })

//esta función nos vuelve a cargar más characters porque fijate 
//en la url en la linea 47, llama a la siguiente página cuando vuelve a lanzarse
function handleButtonCargar() {

    getCharacters()
        .then(characters => {
            console.log(characters)
            drawCard(characters)
        })

}


const cargar = document.querySelector("#cargar")

cargar.addEventListener("click", handleButtonCargar)






function drawCard(character) {

    const rickMarty = document.querySelector("#containerFinal")


    const rickyDiv = document.createElement('div');
    rickyDiv.className = 'container';

    rickyDiv.innerHTML = `
           <div class="flexClass">
               <div id="characterName"  class="properties">${character.name}</div>
               <div class="properties">${character.status}</div>
           </div>
           <div>
           <img src="${character.image}" alt="${character.name}">
           </div>
           <div class="flexClass">
               <div class="properties">${character.species}</div>
               <div class="properties">${character.gender}</div>
           </div>
           <div class="location">${character.location.name}</div>
           <div id = "ver" class="linkToCard"><a href="character.html?id=${character.id}">Ver personaje</a><div>
       
       `
    rickMarty.append(rickyDiv);




}



const characterURL = 'https://rickandmortyapi.com/api/character'


// Como ya sabrás, tendrás que hacer un fetch en esta nueva página a UN SOLO PERSONAJE usando
// la id que viene como parámetro en la url.
function getSingleCharacter() {
    // Sacamos la id del personaje de la URL del front
    const id = new URLSearchParams(window.location.search).get('id');
    // Hacemos la petición a la url del personaje...
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    // A partir de aquí haremos el fetch de un solo personaje usando la nueva URL
    // y pintaremos su carta única en la nueva página
    return fetch(url)
        .then(res => res.json())
        .then((apiData) => {

            console.log(apiData)
            drawCard(apiData)
        })
}

getSingleCharacter()
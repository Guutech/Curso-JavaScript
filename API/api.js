const container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data.results)
        data.results.forEach(character => {
            const card = document.createElement("div")
            card.className = "box"
            card.innerHTML =
            `
            <img src="${character.image}"/>
            <p>Nome: "${character.name}"</p>
            <p>Gênero: "${character.gender}"</p>
            <p>Localização: "${character.location.name}"</p>
            <p>Status: "${character.status}"</p>
            `
            container.appendChild(card)
        })
            
        
        
    })

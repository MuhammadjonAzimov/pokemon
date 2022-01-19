const pokemons = [
    {
        id: 1,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
        name: "bulbasaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 40,
            attack: 50,
            defense: 45,
            special_attack: 70,
            special_defense: 80,
            speed: 55
        }
    },
    {
        id: 2,
        img: "  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
        name: "ivysaur",
        ability: ["grass", "poision"],
        stats: {
            hp: 32,
            attack: 48,
            defense: 43,
            special_attack: 60,
            special_defense: 50,
            speed: 65
        }
    },
    {
        id: 3,
        img: "  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
        name: "charmander",
        ability: ["fire"],
        stats: {
            hp: 33,
            attack: 42,
            defense: 49,
            special_attack: 62,
            special_defense: 43,
            speed: 61
        }
    },
    {
        id: 4,
        img: "  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png",
        name: "charmeleon",
        ability: ["fire"],
        stats: {
            hp: 36,
            attack: 51,
            defense: 33,
            special_attack: 53,
            special_defense: 45,
            speed: 77
        }
    },
    {
        id: 5,
        img: "  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
        name: "charizard",
        ability: ["fire", "flying"],
        stats: {
            hp: 35,
            attack: 48,
            defense: 51,
            special_attack: 61,
            special_defense: 58,
            speed: 73
        }
    },
    {
        id: 6,
        img: "  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png",
        name: "wartortle",
        ability: ["water"],
        stats: {
            hp: 42,
            attack: 39,
            defense: 38,
            special_attack: 58,
            special_defense: 44,
            speed: 62
        }
    }
]

const container = document.querySelector(".grid-container")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

for (let pokemon of pokemons) {
    const div = document.createElement("div");
    div.classList.add("pokemon")
    div.id = pokemon.id

    const img = document.createElement("img")
    img.src = pokemon.img
    img.style.width = "200px"

    const p = document.createElement("p")
    p.classList.add("name")
    p.innerText = pokemon.name
    p.style.color = "white"
    p.style.fontSize = "22px"

    div.append(img, p)

    div.addEventListener("click", () => {
        const img = document.createElement("img")
        const h2 = document.createElement("h2")
        const b1 = document.createElement("b")


        img.src = pokemon.img
        h2.innerText = pokemon.name
        let statistika = pokemon.stats
        modal.append(img, h2)
        img.style.width = "200px"

        for (let i in statistika) {
            console.log(statistika[i])
            const p = document.createElement("p")
            p.innerText = `${i}: ${statistika[i]}`
            modal.appendChild(p)
        }

        modal.classList.toggle("modal-open")
        overlay.classList.toggle("overlay-open")
    })

    container.appendChild(div)
}

overlay.addEventListener("click", () => closeModal())


document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal()
    }
})

const closeModal = () => {
    modal.classList.toggle("modal-open")
    overlay.classList.toggle("overlay-open")

    let modalChildren = []

    for (let child of modal.children) {
        modalChildren.push(child)
    }

    for (let child of modalChildren) {
        modal.removeChild(child)
    }
}
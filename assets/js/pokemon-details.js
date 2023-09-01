const pokemonDetails = document.getElementById('pokemonDetails')

const maxRecords = 151
const limit = 1
let offset = 0;

// Lista de Pokemons
function convertPokemonToLi(pokemon) {
    return `
        <section class="content ${pokemon.type}">
            <a href="index.html">
                <span class="material-symbols-outlined backward">
                    arrow_back
                </span>
            </a>

            <ol  class="pokemons">
                <li class="pokemon">
                    <div class="detail">
                        <div>
                            <span class="name">${pokemon.name}</span>
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                        </div>

                        <div class="number">
                            <span >#${pokemon.number}</span>
                        </div>
                    </div>

                    <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                </li>
            </ol>
        </section>
    `
}

function openPokemonDetail() {
    const detailsWindow = window.open('/js-developer-pokedex/pokemon_details.html', "_self")
    detailsWindow.focus()
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonDetails.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)
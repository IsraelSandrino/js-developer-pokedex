const pokemonDetails = document.getElementById('pokemonDetails')

const maxRecords = 151
const limit = 1
let offset = 0;
let id = 1;

// Lista de Pokemons
function convertPokemonToLi(pokemon, pokemonSpecie) {
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
                            <span >#${pokemon.id}</span>
                        </div>
                    </div>

                    <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                </li>
            </ol>

            <div class="li-details">
                <nav class="nav">
                    <ul class="nav-list">
                        <li class="item active">About</li>
                        <li class="item">Base States</li>
                        <li class="item">Evolution</li>
                        <li class="item">Moves</li>
                    </ul>
                </nav>

                <div>
                    <ol class="about-list">
                        <li class="about-item">
                            <span class="about-characteristics">Species</span>
                            <span>Seed</span>
                        </li>
                        <li class="about-item">
                            <span class="about-characteristics">Height</span>
                            <span>${pokemon.height} cm</span>
                        </li>
                        <li class="about-item">
                            <span class="about-characteristics">Weight</span>
                            <span>${pokemon.weight} kg</span>
                        </li>
                        <li class="about-item">
                            <span class="about-characteristics">Abilities</span>
                            <span class="abilities">
                                ${pokemon.abilities.map((ability) => `${ability} `).join('')}
                            </span>
                        </li>
                    </ol>
                    
                    <span class="about-breeding">Breeding</span>

                    <ol class="about-list">
                        <li class="about-item">
                            <span class="about-characteristics">Gender</span>
                            <span>87,5% 12.5%</span>
                        </li>
                        <li class="about-item">
                            <span class="about-characteristics">Egg Groups</span>
                            <span>${pokemonSpecie.egg_groups}</span>
                        </li>
                        <li class="about-item">
                            <span class="about-characteristics">Egg Cycle</span>
                            <span>Grass</span>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    `
}

// Função para a chamada da lista de pokemons, contêm os primeiros dados do pokemon
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonDetails.innerHTML += newHtml
    })
}
loadPokemonItens(offset, limit)

// Função para a chamada dos dados detalhados do pokemon
function loadPokemonSpecie(id) {
    pokeSpecieApi.getSpeciePokemon(id).then((pokemonSpecie) => {
        const newHtml = convertPokemonToLi(pokemonSpecie);
        pokemonDetails.innerHTML += newHtml;
    });
}
loadPokemonSpecie(id);
const pokeSpecieApi = {}

function convertPokeApiSpecieDetailToPokemon(pokeDetail) {
    const pokemonSpecie = new PokemonSpecie()
    pokemonSpecie.egg_groups = pokeDetail.egg_groups[0].name
}

pokeSpecieApi.getSpeciePokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiSpecieDetailToPokemon)
}

pokeSpecieApi.getSpeciePokemon = (id = 2) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeSpecieApi.getSpeciePokemonDetail))
    .then((specieRequest) => Promise.all(specieRequest))
    .then((specieDetails) => specieDetails)
}


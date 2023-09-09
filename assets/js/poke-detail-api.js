const pokeSpecieApi = {}

pokeSpecieApi.getSpeciePokemonDetail = (pokeSpecie) => {
    const specieDetails = new Specie()

    specieDetails.egg_groups = pokeSpecie.egg_groups[0].name
    specieDetails.gender = pokeSpecie.gender_rate * 100

    return specieDetails
}

pokeSpecieApi.getSpeciePokemon = (id = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
    
    return fetch(url)
    .then((response) => response.json())
    .then((pokemonSpecie) => {
        return pokeSpecieApi.getSpeciePokemonDetail(pokemonSpecie)
    })
    .then((specieDetails) => specieDetails)
}


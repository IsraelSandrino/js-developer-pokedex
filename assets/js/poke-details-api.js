// Recupere os detalhes do Pokémon do localStorage
const pokemonDetails = JSON.parse(localStorage.getItem('pokemonDetails'));

// Exiba os detalhes do Pokémon no DOM
const pokemonDetailsContainer = document.getElementById('pokemonDetailsContainer');

if (pokemonDetails) {
    pokemonDetailsContainer.innerHTML = `
        <h2>${pokemonDetails.name}</h2>
        <img src="${pokemonDetails.photo}" alt="${pokemonDetails.name}">
        <p>Altura: ${pokemonDetails.height}</p>
        <p>Peso: ${pokemonDetails.weight}</p>
        <p>Peso: ${pokemonDetails.egg_groups[0].name}</p>
        <!-- Adicione mais detalhes conforme necessário -->
    `;
} else {
    pokemonDetailsContainer.innerHTML = '<p>Detalhes do Pokémon não encontrados.</p>';
}
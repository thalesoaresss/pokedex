const pokemon_name = document.querySelector('.pokemonName')
const pokemon_number = document.querySelector('.pokemonNumber')
const pokemon_image = document.querySelector('.pokemonImage')

const form = document.querySelector('.form')
const input = document.querySelector('.inputSearch')
const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let searchPokemon = 1;


const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status = 200){
        const data = await APIResponse.json();
        return data;
    } 
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    if(data){
        pokemon_name.innerHTML = data.name;
        pokemon_number.innerHTML = data.id;
        pokemon_image.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default']
        input.value = '';
        searchPokemon = data.id;
    } else {
        alert('pokemon não encontrado')
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
    searchPokemon -= 1;
    renderPokemon(searchPokemon)
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
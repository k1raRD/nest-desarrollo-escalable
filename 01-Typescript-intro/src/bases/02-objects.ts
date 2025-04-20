
export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
    id: number;
    name: string;
    age?: number
}

export const pokemon: Pokemon = {
    id: 1,
    name: 'bulbasaur'
}

export const charmander: Pokemon = {
    id: 0,
    name: ""
}

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, pokemon);
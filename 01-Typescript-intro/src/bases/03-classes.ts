import axios from 'axios';
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    constructor(
        public readonly id: number, 
        public name: string,
    ) {}

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`;
    }

    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    public speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        
        return data.moves
    }
}

export const charmander = new Pokemon(2, 'Charmander');
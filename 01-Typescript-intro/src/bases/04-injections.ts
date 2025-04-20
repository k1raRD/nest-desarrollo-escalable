import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: HttpAdapter
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
        const data  = await this.http.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        
        return data.moves
    }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();


export const charmander = new Pokemon(2, 'Charmander', pokeApiAxios);
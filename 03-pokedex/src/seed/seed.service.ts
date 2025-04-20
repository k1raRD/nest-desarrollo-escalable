import { Injectable } from '@nestjs/common';
import { PokeAPIResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { HttpAdapter } from 'src/common/interfaces/http-adapter.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ){}

  public async executeSeed() {
    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon?limit=650`);

    const pokemonsToInsert: {name: string, no: number}[] = [];

    data.results.forEach(async({name, url}) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      pokemonsToInsert.push({name, no})
    });

    this.pokemonModel.insertMany(pokemonsToInsert);
    return 'Seed executed';
  }
}

import { IGeneration } from "../@types/pokemon-generation-response.iterface";

const getPokemonGenerationUrl = (pokemonSpecies: IGeneration): string => {
    return pokemonSpecies.generation.url;
}

export { getPokemonGenerationUrl };

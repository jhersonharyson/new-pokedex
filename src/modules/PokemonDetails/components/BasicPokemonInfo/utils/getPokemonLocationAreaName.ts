import { TPokeApiGetPokemonLocationResponse } from "../@types/pokemon-location-response.iterface"

const getPokemonLocationAreaName = (pokemonLocation: TPokeApiGetPokemonLocationResponse): string => {
    return pokemonLocation[0].location_area.name.split("-").join(" ")
}

export { getPokemonLocationAreaName }
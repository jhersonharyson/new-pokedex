import { IRegion } from "../@types/pokemon-region-response.iterface";

const getPokemonMainRegionName = (pokemonRegion: IRegion): string => {
    return pokemonRegion.main_region.name.replace(/-/g, " ");
}

export { getPokemonMainRegionName }
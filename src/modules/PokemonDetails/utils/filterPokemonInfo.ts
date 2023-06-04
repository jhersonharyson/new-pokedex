import { IPokeApiGetPokemonResponse, IPokemonInfo } from "../@types";

const filterPokemonInfo = (pokemon: IPokeApiGetPokemonResponse): IPokemonInfo => {
    if (pokemon.id == null) return {} as IPokemonInfo;

    const filtered: IPokemonInfo = {} as IPokemonInfo
    filtered.id = pokemon.id;
    filtered.name = pokemon.name
    filtered.base_experience = pokemon.base_experience
    filtered.height = pokemon.height
    filtered.is_default = pokemon.is_default
    filtered.order = pokemon.order
    filtered.weight = pokemon.weight
    filtered.moves = pokemon.moves.map(({ move }) => move.name)
    filtered.types = pokemon.types.map(({ type }) => type.name)
    filtered.stats = pokemon.stats.map(({ stat, base_stat }) => ({ name: stat.name, value: base_stat }))
    filtered.sprites = {
        artwork: pokemon?.sprites?.other["official-artwork"]?.front_default,
        animated: pokemon?.sprites?.versions["generation-v"]["black-white"]?.animated?.front_default
    }
    return filtered;
}

export { filterPokemonInfo }
import { IPokemonInfo } from "../../../@types";

export interface PokemonRoulletSelectorProps {
	pokemon: IPokemonInfo;
	onSelect: (pokemonId: number) => void;
}

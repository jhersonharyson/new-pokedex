import { IPokemonBasicInfo } from "./pokemon-basic-info.interface";

export interface IPokemonInfo extends IPokemonBasicInfo {
  moves: string[];
  types: string[];
  stats: { name: string, value: number }[];
  sprites: {
    artwork: string;
    animated: string;
  }
}

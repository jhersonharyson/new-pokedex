import { IPokemonBasicInfo } from "./pokemon-basic-info.interface";

export interface IPokeApiGetPokemonResponse extends IPokemonBasicInfo {
  moves: { move: { name: string } }[];
  stats: { stat: { name: string }, base_stat: number }[];
  types: { type: { name: string } }[];

  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      }
    },
    versions: {
      ["generation-v"]: {
        ["black-white"]: {
          animated: {
            front_default: string;
          }
        }
      }
    }
  }
}

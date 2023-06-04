import axios from "axios";
import { useEffect, useState } from "react";
import { IPokeApiGetPokemonResponse, IPokemonInfo } from "../@types";
import { filterPokemonInfo } from "../utils/filterPokemonInfo";

const URL = (pokemonName: number) =>
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

export const usePokemonInfo = (pokemonName: number): IPokemonInfo => {
    const [pokemon, setPokemon] = useState<IPokemonInfo>({} as IPokemonInfo);

    useEffect(() => {
        const fetchPokemonInfo = async () => {
            try {
                const response = await axios.get<IPokeApiGetPokemonResponse>(URL(pokemonName));
                setPokemon(filterPokemonInfo(response.data));
            } catch (error) {
                console.log("Error fetching Pokemon data:", error);
            }
        };

        fetchPokemonInfo();
    }, [pokemonName]);

    return pokemon;
};
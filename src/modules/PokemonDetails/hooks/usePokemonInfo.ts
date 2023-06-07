import { useEffect, useState } from 'react';
import axios from "axios";
import { useQueryClient } from '@tanstack/react-query';

import { IPokeApiGetPokemonResponse, IPokemonInfo } from "../@types";
import { filterPokemonInfo } from "../utils/filterPokemonInfo";

const URL = (pokemonId: number) =>
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

const pokemonFetcher = async (pokemonId: number) => {
    const { data } = await axios.get<IPokeApiGetPokemonResponse>(URL(pokemonId))
    return data
};

export const usePokemonInfo = (pokemonId: number): IPokemonInfo => {
    const [pokemon, setPokemon] = useState<IPokemonInfo>({} as IPokemonInfo);
    const queryClient = useQueryClient();

    useEffect(() => {
        const fetchData = async () => {
            const data = await queryClient.fetchQuery({ queryKey: ['pokemon', pokemonId], queryFn: () => pokemonFetcher(pokemonId) })
            setPokemon(filterPokemonInfo(data));
        }
        fetchData();
    }, [pokemonId, queryClient]);

    if (!pokemon)
        return {} as IPokemonInfo

    return pokemon
};
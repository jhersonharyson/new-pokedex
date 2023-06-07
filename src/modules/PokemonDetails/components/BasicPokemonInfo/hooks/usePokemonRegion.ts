import { useQueryClient } from '@tanstack/react-query';
import axios from "axios"
import { useEffect, useState } from "react"
import { usePokemonInfo } from "../../../hooks/usePokemonInfo"
import { getPokemonMainRegionName } from "../utils/getPokemonMainRegionName"

const URL = (pokemonId: number) => `https://pokeapi.co/api/v2/generation/${pokemonId}`
const pokemonGenerationFetcher = async (pokemonId: number) => {
    const response = await axios.get(URL(pokemonId));
    return response.data;
}

const usePokemonRegion = (pokemonId: number) => {
    const [pokemonRegion, setPokemonRegion] = useState<string>()
    const pokemon = usePokemonInfo(pokemonId)
    const queryClient = useQueryClient()

    useEffect(() => {
        const fetchData = async () => {
            const data = await queryClient.fetchQuery({ queryKey: [pokemon.id], queryFn: () => pokemonGenerationFetcher(pokemon.id) })
            setPokemonRegion(getPokemonMainRegionName(data))
        }
        if (pokemon.id) {
            fetchData()
        }
    }, [pokemonId, pokemon, queryClient])



    return [pokemonRegion]
}

export { usePokemonRegion }

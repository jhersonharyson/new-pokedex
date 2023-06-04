import axios from "axios"
import { useEffect, useState } from "react"
import { TPokeApiGetPokemonLocationResponse } from "../@types/pokemon-location-response.iterface"
import { getPokemonLocationAreaName } from "../utils/getPokemonLocationAreaName"

const URL = (pokemonId: number) => `https://pokeapi.co/api/v2/pokemon/${pokemonId}/encounters`

const usePokemonLocation = (pokemonId: number) => {
    const [pokemonLocation, setPokemonLocation] = useState<string>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get<TPokeApiGetPokemonLocationResponse>(URL(pokemonId))
            setPokemonLocation(getPokemonLocationAreaName(response.data))
        }
        fetchData()
    }, [pokemonId])



    return [pokemonLocation]
}

export { usePokemonLocation }

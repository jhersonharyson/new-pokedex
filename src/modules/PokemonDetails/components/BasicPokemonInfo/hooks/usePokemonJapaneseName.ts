import { useState } from "react"
import { getPokemonJapaneseName } from "../utils/getPokemonJapaneseName"

const usePokemonJapaneseName = (pokemonId: number) => {
    const [japaneseName] = useState(getPokemonJapaneseName(pokemonId))
    return japaneseName
}

export { usePokemonJapaneseName }
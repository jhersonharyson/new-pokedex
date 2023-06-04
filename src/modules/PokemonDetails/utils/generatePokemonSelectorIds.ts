export const generatePokemonSelectorIds = (currentPokemonId: number) => {
    const total = 10;
    const MIN_POKEMON_ID = 1
    const MAX_POKEMON_ID = 1010
    let middle = 5

    if (currentPokemonId - middle < MIN_POKEMON_ID) {
        middle += currentPokemonId - middle;
    }

    if (currentPokemonId + middle >= MAX_POKEMON_ID) {
        middle += (currentPokemonId + middle) - MAX_POKEMON_ID;
    }

    return Array(total).fill(1).map((_, index) => currentPokemonId - middle + index + 1)
}
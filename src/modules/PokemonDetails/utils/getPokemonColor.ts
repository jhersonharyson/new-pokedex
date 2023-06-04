import { prominent } from 'color.js'

export const getPokemonColor = async (imageUrl: string): Promise<string> => {
    // Or with different syntax:
    const diff = 50;
    const colors: number[][] = await prominent(imageUrl, { amount: 3 }) as number[][];
    const color = colors?.find(color => ![color[0], color[1], color[2]].includes(0)) || []
    const rgba = `rgba(${color[0] - diff}, ${color[1] - diff}, ${color[2] - diff}, 0.9)`
    return rgba;
}
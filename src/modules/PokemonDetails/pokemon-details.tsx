import { useEffect, useRef, useState } from "react";
import { usePokemonInfo } from "./hooks/usePokemonInfo";
import { BasicPokemonInfo } from "./components/BasicPokemonInfo/basic-pokemon-info";
import { BasicPokemonStats } from "./components/BasicPokemonStats/basic-pokemon-stats";
import { PokemonRoulletSelector } from "./components/PokemonRoulletSelector/pokemon-roullet-selector";
// import type { PokemonDetailsProps } from "./@types";
import * as S from './pokemon-details-styles'
import { getPokemonColor } from "./utils/getPokemonColor";

const PokemonDetails = () => {

  const [pokemonName] = useState("bulbasaur")
  const pokemon = usePokemonInfo(pokemonName)
  const [pokemonPaletteColor, setPokemonPaletteColor] = useState<string>()


  useEffect(() => {
    const fetchPokemonColor = async (imageUrl: string) => {
      const rgba = await getPokemonColor(imageUrl)
      setPokemonPaletteColor(rgba)
    }
    if (pokemon?.sprites?.artwork) {
      fetchPokemonColor(pokemon.sprites.artwork)
    }
  }, [pokemon])

  if (!pokemon.name) return null;

  return (
    <S.Container>
      <S.Main>
        <BasicPokemonInfo pokemon={pokemon} />
        <BasicPokemonStats pokemon={pokemon} />
        <PokemonRoulletSelector pokemon={pokemon} />
      </S.Main>
      <S.Background color={pokemonPaletteColor}></S.Background>
    </S.Container>

  );
};

export { PokemonDetails };

import { useEffect, useState } from "react";
import { BasicPokemonInfo } from "./components/BasicPokemonInfo/basic-pokemon-info";
import { BasicPokemonStats } from "./components/BasicPokemonStats/basic-pokemon-stats";
import { PokemonRoulletSelector } from "./components/PokemonRoulletSelector/pokemon-roullet-selector";
import { usePokemonInfo } from "./hooks/usePokemonInfo";
import { getPokemonColor } from "./utils/getPokemonColor";

import * as S from './pokemon-details-styles';

const PokemonDetails = () => {
  const [pokemonId, setPokemonId] = useState(1)
  const pokemon = usePokemonInfo(pokemonId)
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
        <PokemonRoulletSelector pokemon={pokemon} onSelect={(pokemonId) => setPokemonId(pokemonId)} />
      </S.Main>
      <S.Background color={pokemonPaletteColor}></S.Background>
    </S.Container>

  );
};

export { PokemonDetails };

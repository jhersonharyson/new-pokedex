import { BasicPokemonInfoProps } from './@types';
import { usePokemonLocation } from './hooks/usePokemonLocation';
import { getPokemonJapaneseName } from './utils/getPokemonJapaneseName';
import * as S from './basic-pokemon-info-styles';

const BasicPokemonInfo = ({ pokemon }: BasicPokemonInfoProps) => {
	const pokemonLocation = usePokemonLocation(pokemon.id)
	const japanesePokemon = getPokemonJapaneseName(pokemon.id)


	return (
		<S.Container className='basic-info'>
			<S.BasicInfo className='pokemon-id'># {pokemon.id}</S.BasicInfo>
			<S.BasicInfo className='pokemon-name'>{pokemon.name}</S.BasicInfo>
			<S.JapaneseNameContainer>
				<S.RotateContainer>
					<S.BasicInfo className="region-info"><S.Strong>Region:</S.Strong> {pokemonLocation}</S.BasicInfo>
				</S.RotateContainer>
				<div className="basic-info-main-container">
					<S.DiaplayJapaneseName>{japanesePokemon}</S.DiaplayJapaneseName>

					<S.BasicInfo><S.Strong>Heigh:</S.Strong> {pokemon.height}ft</S.BasicInfo>
					<S.BasicInfo><S.Strong>Weight:</S.Strong> {pokemon.weight}lb</S.BasicInfo>
					<S.PokemonImage src={pokemon.sprites.artwork} />

				</div>
			</S.JapaneseNameContainer>
		</S.Container>
	);
}

export { BasicPokemonInfo };

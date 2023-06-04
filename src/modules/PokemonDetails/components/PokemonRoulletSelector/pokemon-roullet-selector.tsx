import * as S from './pokemon-roullet-selector-styles';
import type { PokemonRoulletSelectorProps } from './@types';

function PokemonRoulletSelector({ pokemon }: PokemonRoulletSelectorProps) {
	return (
		<S.Container className='roullet-selector'>{pokemon.id}</S.Container>
	);
}

export { PokemonRoulletSelector };
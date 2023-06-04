import type { PokemonRoulletSelectorProps } from './@types';
import { generatePokemonSelectorIds } from '../../utils/generatePokemonSelectorIds';
import * as S from './pokemon-roullet-selector-styles';

function PokemonRoulletSelector({ pokemon, onSelect }: PokemonRoulletSelectorProps) {

	const selectorIds = generatePokemonSelectorIds(pokemon.id).map(id => <S.PokemonId key={id} onClick={() => onSelect(id)} className={id == pokemon.id ? 'selected' : ''}>{id}</S.PokemonId>)

	return (
		<S.Container className='roullet-selector'>
			<S.ArrowUp className={pokemon.id <= 1 ? 'disabled' : ''} onClick={() => onSelect(pokemon.id - 1)}>
				&#8249;
			</S.ArrowUp>
			{selectorIds}
			<S.ArrowDown className={pokemon.id >= 1010 ? 'disabled' : ''} onClick={() => onSelect(pokemon.id + 1)}>
				&#8249;
			</S.ArrowDown>
		</S.Container>
	);
}

export { PokemonRoulletSelector };
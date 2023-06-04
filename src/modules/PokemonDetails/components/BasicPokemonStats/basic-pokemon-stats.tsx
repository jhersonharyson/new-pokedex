import { BasicPokemonStatsProps } from './@types';
import * as S from './basic-pokemon-stats-styles';

const BasicPokemonStats = ({ pokemon }: BasicPokemonStatsProps) => {

	const stats = Array.from(pokemon.stats).map(stat => <S.BasicStat key={stat.name}>{stat.name}: {stat.value}</S.BasicStat>)
	const types = Array.from(pokemon.types).map(type => (
		<S.MainPokemonTypeContainer key={type}>
			<S.ContainerPokemonType>
				<S.PokemonTypeImage src={"src/assets/svg/pokemon-types/" + type + ".svg"} />
			</S.ContainerPokemonType>
			<S.PokemonTypeText>{type}</S.PokemonTypeText>
		</S.MainPokemonTypeContainer>
	))

	return (
		<S.Container className='basic-stats'>
			<S.MainContainer>
				{types}
				<S.ContainerStats>
					<S.BasicStat className='principal-text'>Base Stats</S.BasicStat>
					{stats}
				</S.ContainerStats>
			</S.MainContainer>
		</S.Container>
	);
}

export { BasicPokemonStats };

import { BasicPokemonStatsProps } from './@types';
import * as S from './basic-pokemon-stats-styles';
import eletric from "./../../../../assets/svg/pokemon-types/eletric.svg"
const BasicPokemonStats = ({ pokemon }: BasicPokemonStatsProps) => {

	const stats = Array.from(pokemon.stats).map(stat => <S.BasicStat>{stat.name}: {stat.value}</S.BasicStat>)

	return (
		<S.Container className='basic-stats'>
			<S.MainContainer>
				<S.ContainerPokemonType>
					<S.PokemonTypeImage src={eletric} />
				</S.ContainerPokemonType>
				<S.ContainerStats>
					<S.BasicStat className='principal-text'>Base Stats</S.BasicStat>
					{stats}
				</S.ContainerStats>
			</S.MainContainer>
		</S.Container>
	);
}

export { BasicPokemonStats };
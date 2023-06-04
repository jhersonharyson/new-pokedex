import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { BasicPokemonStats } from './basic-pokemon-stats';
import { IPokemonInfo } from '../../@types';

const makeSut = () => render(<BasicPokemonStats pokemon={{} as IPokemonInfo} />);

describe('BasicPokemonStats', () => {
	test('should render', () => {
		makeSut();
		const title = screen.getByRole('heading');
		expect(title).toBeDefined();

	});
});

import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { PokemonRoulletSelector } from './pokemon-roullet-selector';
import { IPokemonInfo } from '../../@types';

const makeSut = () => render(<PokemonRoulletSelector pokemon={{} as IPokemonInfo} />);

describe('PokemonRoulletSelector', () => {
	test('should render', () => {
		makeSut();
		const title = screen.getByRole('heading');
		expect(title).toBeDefined();

	});
});

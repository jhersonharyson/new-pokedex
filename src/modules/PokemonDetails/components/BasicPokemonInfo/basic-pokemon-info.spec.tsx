import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { IPokemonInfo } from '../../@types';
import { BasicPokemonInfo } from './basic-pokemon-info';

const makeSut = () => render(<BasicPokemonInfo pokemon={{} as IPokemonInfo} />);

describe('BasicPokemonInfo', () => {
	test('should render', () => {
		makeSut();
		const title = screen.getByRole('heading');
		expect(title).toBeDefined();

	});
});

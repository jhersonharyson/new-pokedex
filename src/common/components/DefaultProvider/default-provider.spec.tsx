import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { DefaultProvider } from './default-provider';

const makeSut = () => render(<DefaultProvider />);

describe('DefaultProviderComponent', () => {
	test('should render', () => {
		makeSut();
		const title = screen.getByRole('heading');
		expect(title).toBeDefined();

	});
});

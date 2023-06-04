import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PokemonDetails } from "./pokemon-details";

const makeSut = () => render(<PokemonDetails />);

describe("PokemondetailsComponent", () => {
  test("should render", () => {
    makeSut();
    const title = screen.getByTestId("123");
    expect(title).toBeTruthy();
  });
});

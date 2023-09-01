import React from 'react';
import { render, fireEvent } from "@testing-library/react-native";

import AddPokemonScreen from '../src/screens/AddPokemonScreen';

describe('PokemonDetailScreen', () => {
    it('should update state when input fields change', () => {
      const { getByPlaceholderText } = render(<AddPokemonScreen />);
      const nameInput = getByPlaceholderText("Nombre del Pokémon");
      const typeInput = getByPlaceholderText("Tipo del Pokémon");
      const levelInput = getByPlaceholderText("Nivel del Pokémon");

      fireEvent.changeText(nameInput, "Pikachu");
      fireEvent.changeText(typeInput, "Eléctrico");
      fireEvent.changeText(levelInput, "25");

      expect(nameInput.props.value).toBe("Pikachu");
      expect(typeInput.props.value).toBe("Eléctrico");
      expect(levelInput.props.value).toBe("25");
});
});
const { stringifyWinner, stringifyPokemon } = require('.');

describe('OUTPUT', () => {
  describe('STRINGIFY WINNER', () => {
    it('Should stringify the winner in the correct format', () => {
      expect(stringifyWinner({
        winner: 'Bulbasaur',
        turns: 10,
      })).toBe('A batalha acaba em 10 Turnos, Vencedor: Bulbasaur');
    });
  });

  describe('STRINGIFY POKEMON', () => {
    it('Should stringify a pokemon in the correct format', () => {
      expect(stringifyPokemon({
        name: 'Pikachu',
        level: 10,
        healthPoints: 20,
        attack: 30,
        defense: 40,
        speed: 50,
      })).toBe('Pokemon: Pikachu nivel 10\n'
      + 'HP: 20\n'
      + 'AT: 30\n'
      + 'DF: 40\n'
      + 'SP: 50\n');
    });
  });
});

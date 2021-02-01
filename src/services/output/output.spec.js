const formatOutput = require('.');

describe('OUTPUT', () => {
  it('Should format the result in the correct format', () => {
    expect(formatOutput({
      winner: 'Bulbasaur',
      turns: 10,
    })).toBe('A batalha acaba em 10 Turnos, Vencedor: Bulbasaur');
  });
});

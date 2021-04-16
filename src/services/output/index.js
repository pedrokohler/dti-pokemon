const stringifyWinner = ({ winner, turns }) => `A batalha acaba em ${turns}`
+ ` Turnos, Vencedor: ${winner}`;

const stringifyPokemon = ({
  name,
  level,
  healthPoints,
  attack,
  defense,
  speed,
}) => `Pokemon: ${name} nivel ${level}\n`
+ `HP: ${healthPoints}\n`
+ `AT: ${attack}\n`
+ `DF: ${defense}\n`
+ `SP: ${speed}\n`;

const stringifyOutput = (pokemons, winner) => pokemons
  .map(stringifyPokemon)
  .join('')
  + stringifyWinner(winner);

module.exports = { stringifyWinner, stringifyPokemon, stringifyOutput };

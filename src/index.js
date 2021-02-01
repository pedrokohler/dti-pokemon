const { computeWinner } = require('./domain/battle');
const { convertInputIntoPokemon } = require('./domain/converter');
const loadInput = require('./services/input');
const formatOutput = require('./services/output');

const inputPath = process.argv[2];

(async () => {
  const input = await loadInput(inputPath);
  const pokemons = input.map(convertInputIntoPokemon);
  const winner = computeWinner(...pokemons);
  const output = formatOutput(winner);
  // eslint-disable-next-line no-console
  console.log(output);
})();

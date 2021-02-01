const { computeAttribute, computeHealthPoints } = require('../attributes');

const getAttributeComputationStrategy = (attribute) => {
  if (attribute === 'healthPoints') {
    return computeHealthPoints;
  }
  return computeAttribute;
};

const convertInputIntoPokemon = (input) => Object
  .keys(input.attributes)
  .reduce((pokemon, attribute) => {
    const computeAttributeWithCorrectStrategy = getAttributeComputationStrategy(attribute);
    const attributeValue = computeAttributeWithCorrectStrategy({
      level: input.level,
      ...input.attributes[attribute],
    });
    return {
      ...pokemon,
      [attribute]: attributeValue,
    };
  }, {
    name: input.name,
    level: input.level,
  });

module.exports = {
  convertInputIntoPokemon,
};

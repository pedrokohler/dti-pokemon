const fs = require('fs');

const checkForMissingValue = (value) => {
  if (value === undefined || value === '') {
    throw new Error('Missing or invalid value');
  }
};

const checkForMissinOrInvalidNumericValue = (value) => {
  checkForMissingValue(value);
  if (Number.isNaN(Number(value))) {
    throw new Error(`Value ${value} is not numeric`);
  }
};

const maybeConvertToNumber = (el) => (Number(el) ? Number(el) : el);

const parseAttributeLine = (attributeLine) => {
  const [
    baseAttribute,
    individualValue,
    effortValue,
  ] = attributeLine.split(' ')
    .map(maybeConvertToNumber);

  [baseAttribute, individualValue, effortValue]
    .forEach(checkForMissinOrInvalidNumericValue);

  return {
    baseAttribute,
    individualValue,
    effortValue,
  };
};

const parseContender = (contenderLines) => {
  const [name, level] = contenderLines[0].split(' ').map(maybeConvertToNumber);
  const [
    healthPoints,
    attack,
    defense,
    speed,
  ] = contenderLines.slice(1)
    .map(parseAttributeLine);

  checkForMissinOrInvalidNumericValue(level);
  [name, healthPoints, attack, defense, speed]
    .forEach(checkForMissingValue);

  return {
    name,
    level,
    attributes: {
      healthPoints,
      attack,
      defense,
      speed,
    },
  };
};

const parseInput = (text) => {
  try {
    const lines = text.toString().split(/\r?\n/); // LF or CRLF
    const contenderA = lines.slice(0, 5);
    const contenderB = lines.slice(5);

    return [parseContender(contenderA), parseContender(contenderB)];
  } catch (e) {
    throw new Error(`PARSING ERROR: the file you provided cannot be correctly parsed: ${e.message}`);
  }
};

const loadInput = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) return reject(err);
    return resolve(parseInput(data));
  });
});

module.exports = loadInput;

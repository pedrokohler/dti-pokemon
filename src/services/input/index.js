const fs = require('fs');

const maybeConvertToNumber = (el) => (Number(el) ? Number(el) : el);

const parseAttributeLine = (attributeLine) => {
  const [
    baseAttribute,
    individualValue,
    effortValue,
  ] = attributeLine.split(' ').map(maybeConvertToNumber);
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
  ] = contenderLines.slice(1).map(parseAttributeLine);

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
  const lines = text.toString().split('\n');
  const contenderA = lines.slice(0, 5);
  const contenderB = lines.slice(5);

  return [parseContender(contenderA), parseContender(contenderB)];
};

const loadInput = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) return reject(err);
    return resolve(parseInput(data));
  });
});

module.exports = loadInput;

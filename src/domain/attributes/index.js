const computeGeneralAttribute = (multiplierShift, finalShift) => ({
  baseAttribute,
  effortValue,
  individualValue,
  level,
}) => {
  const multiplier = individualValue
    + baseAttribute
    + (Math.sqrt(effortValue) / 8)
    + multiplierShift;
  const attribute = (level * multiplier) / 50 + finalShift;
  return Math.floor(attribute);
};

const computeHealthPoints = computeGeneralAttribute(50, 10);

const computeAttribute = computeGeneralAttribute(0, 5);

module.exports = {
  computeHealthPoints,
  computeAttribute,
};

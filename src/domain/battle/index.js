const computeDamage = (attack, defense) => Math.max(attack - defense, 1);

const computeTurnsNeededToWin = (pokemon, opponent) => {
  const { attack } = pokemon;
  const { defense, healthPoints } = opponent;
  const damage = computeDamage(attack, defense);
  return Math.ceil(healthPoints / damage);
};

const computeWinner = (a, b) => {
  const turnsANeedsToWin = computeTurnsNeededToWin(a, b);
  const turnsBNeedsToWin = computeTurnsNeededToWin(b, a);

  if (turnsBNeedsToWin === turnsANeedsToWin) {
    const winner = a.speed > b.speed ? a : b;
    return {
      winner: winner.name,
      turns: turnsANeedsToWin,
    };
  }

  const winner = turnsBNeedsToWin > turnsANeedsToWin ? a : b;
  return {
    winner: winner.name,
    turns: winner === a ? turnsANeedsToWin : turnsBNeedsToWin,
  };
};

module.exports = {
  computeDamage,
  computeTurnsNeededToWin,
  computeWinner,
};

export function increment(team, newScore) {
  return {
    type: 'INCREMENT',
    team,
    newScore
  };
}


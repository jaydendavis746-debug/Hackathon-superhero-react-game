export const runBattle = (pTeam, cpuTeam) => {
  const stats = ["intelligence", "strength", "speed", "durability", "power", "combat"];
  const log = [];
  let pScore = 0;
  let cpuScore = 0;

  const sumStats = (team) => {
    const totals = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    };

    team.forEach(hero => {
      stats.forEach(stat => {
        const value = Number(hero.powerstats[stat]) || 0;
        totals[stat] += value;
      });
    });

    return totals;
  };

  const pTotals = sumStats(pTeam);
  const cpuTotals = sumStats(cpuTeam);

  stats.forEach((stat, i) => {
    const p = pTotals[stat];
    const cpu = cpuTotals[stat];

    if (p > cpu) {
      pScore++;
      log.push(`Round ${i + 1}: Player wins ${stat} (${p} vs ${cpu})`);
    } else if (cpu > p) {
      cpuScore++;
      log.push(`Round ${i + 1}: CPU wins ${stat} (${p} vs ${cpu})`);
    } else {
      log.push(`Round ${i + 1}: Draw on ${stat} (${p} vs ${cpu})`);
    }
  });

  const winner =
    pScore > cpuScore ? "Player wins" :
    cpuScore > pScore ? "CPU wins " :
    "Draw";

  return { log, winner };
};



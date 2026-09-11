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
    pScore > cpuScore ? "Player" :
    cpuScore > pScore ? "CPU" :
    "Draw";

  return { log, winner };
};

console.log(
  runBattle(
    [
      { powerstats: { intelligence: 80, strength: 70, speed: 60, durability: 90, power: 85, combat: 75 } },
      { powerstats: { intelligence: 65, strength: 55, speed: 50, durability: 40, power: 30, combat: 45 } },
      { powerstats: { intelligence: 90, strength: 85, speed: 80, durability: 75, power: 70, combat: 95 } }
    ],
    [
      { powerstats: { intelligence: 70, strength: 75, speed: 65, durability: 85, power: 80, combat: 70 } },
      { powerstats: { intelligence: 60, strength: 50, speed: 55, durability: 45, power: 35, combat: 40 } },
      { powerstats: { intelligence: 95, strength: 80, speed: 85, durability: 70, power: 75, combat: 90 } }
    ]
  )
);

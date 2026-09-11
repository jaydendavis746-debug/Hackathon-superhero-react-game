let allHeroes = [];


const loadHeroes = async () => {
  if (allHeroes.length > 0) return allHeroes;

  try {
    const res = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    const data = await res.json();
    allHeroes = data;
    return allHeroes;
  } catch (err) {
    console.log("Error loading heroes:", err);
  }
};


const hasValidStats = (hero) => {
  if (!hero || !hero.powerstats) return false;

  const stats = hero.powerstats;

  const requiredStats = [
    "intelligence",
    "strength",
    "speed",
    "durability",
    "power",
    "combat"
  ];

  return requiredStats.every(stat => {
    const value = stats[stat];
    if (!value || value === "null" || isNaN(Number(value))) {
      return false;
    }
    return true;
  });
};

export const getRandomHero = async () => {
  const heroes = await loadHeroes();
  const randomIndex = Math.floor(Math.random() * heroes.length);
  return heroes[randomIndex];
};

export const getValidHero = async () => {
  let hero = null;

  for (let i = 0; i < 10; i++) {
    const candidate = await getRandomHero();
    if (hasValidStats(candidate)) {
      hero = candidate;
      break;
    }
  }

  return hero;
};


export const getTeam = async () => {
  const team = [];

  while (team.length < 3) {
    const hero = await getValidHero();
    if (hero) team.push(hero);
  }

  return team;
};

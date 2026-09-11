import HeroCard from "../HeroCard";

import React from "react";

export default function TeamDisplay({ team, title }) {
  if (!team || team.length === 0) return null;

  return (
    <div className="team-display">
      <h2>{title}</h2>
      <div className="team-grid">
        {team.map((hero, i) => (
          <HeroCard key={i} hero={hero} />
        ))}
      </div>
    </div>
  );
}

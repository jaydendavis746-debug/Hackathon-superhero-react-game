import React from "react";

export default function BattleLog({ log }) {
    if (!log || log.length === 0) return null;


  return (
    <div className="battle-log">
      <h2>Battle Log</h2>

      <ul>
        {log.map((entry, i) => (
          <li key={i}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

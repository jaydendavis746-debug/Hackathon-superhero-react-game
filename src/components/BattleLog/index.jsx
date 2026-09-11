import React from "react";

export default function Battlelog({ log }) {
  return (
    <div className="battle-log">
      <h2>Battle Log</h2>

      <ul>
        {log.map((entry, i) => {
          <li key={i}>{entry}</li>;
        })}
      </ul>
    </div>
  );
}

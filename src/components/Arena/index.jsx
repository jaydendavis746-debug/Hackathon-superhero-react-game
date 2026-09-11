import React, { useState } from "react";
import { getTeam } from "../api/superhero";
import { runBattle } from "../battle/battle";
import BattleLog from "../BattleLog";
import TeamDisplay from "../TeamDisplay";

export default function Arena() {
  const [playerTeam, setPlayerTeam] = useState([]);
  const [cpuTeam, setCpuTeam] = useState([]);
  const [log, setLog] = useState([]);
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [displayedLog, setDisplayedLog] = useState([]);

  const startMatch = async () => {
  setLoading(true);
  setWinner(null);
  setLog([]);
  setShowTeams(false);
  setPlayerTeam([]);
  setCpuTeam([]);
  setDisplayedLog([]);

  const pTeam = await getTeam();
  const cTeam = await getTeam();

  setPlayerTeam(pTeam);
  setCpuTeam(cTeam);

  const result = runBattle(pTeam, cTeam);
  setLog(result.log);

  setShowTeams(true);

 
  setDisplayedLog([result.log[0]]);

  let index = 0; 

  const interval = setInterval(() => {
    setDisplayedLog(prev => [...prev, result.log[index]]);
    index++;

    if (index === result.log.length) {
      clearInterval(interval);

      setTimeout(() => {
        setWinner(result.winner);
      }, 1000);
    }
  }, 3000);

  setLoading(false);
};


  return (
    <div className="arena">
      <h1>Battle Arena</h1>

      <button onClick={startMatch} disabled={loading}>
        {loading ? "Generating Teams..." : "Start Match"}
      </button>

      <div className="arena-content">
        {showTeams && (
          <div className="team-scroll-container">
            <div
              className={`team-section ${playerTeam.length > 0 ? "team-slide-left" : ""}`}
            >
              {playerTeam.length > 0 && <h2>Player Team</h2>}
              <TeamDisplay team={playerTeam} />
            </div>

            <div
              className={`team-section ${cpuTeam.length > 0 ? "team-slide-right" : ""}`}
            >
              {cpuTeam.length > 0 && <h2>CPU Team</h2>}
              <TeamDisplay team={cpuTeam} />
            </div>
          </div>
        )}
        <BattleLog log={displayedLog} />
      {winner && <h2 className="winner"> {winner}</h2>}
      </div>

    </div>
  );
}

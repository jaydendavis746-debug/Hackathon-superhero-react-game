import React, { useState } from 'react'
import { getTeam } from '../api/superhero'
import { runBattle } from '../battle/battle';

export default function Arena() {

  const [playerTeam, setPlayerTeam] = useState([]);
  const [cpuTeam, setCpuTeam] = useState([]);
  const [log, setLog] = useState([]);
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(false);

  const startMatch = async () => {
    setLoading(true)
    setWinner(null)
    setLog([])
    
  };


  return (
    <div>Arena</div>
  )
}

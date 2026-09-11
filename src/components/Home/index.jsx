import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Superhero Battle Arena</h1>

        <p className="home-subtitle">
          Assemble your team, challenge the CPU, and watch the battle unfold
          round-by-round in an animated combat simulator.
        </p>

        <Link to="/arena" className="home-button">
          Enter Battle Arena
        </Link>
      </div>
    </div>
  );
}

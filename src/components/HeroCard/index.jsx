import React from "react";

export default function HeroCard({ hero }) {
  if (!hero) return null;



  const { name, images, powerstats } = hero;

  return (
    <div className="hero-card">
      <img
        src={images.sm}
        alt={name}
        className="hero-img"
      />

      <h3>{name}</h3>

      <div className="stats">
        <p>Intelligence: {powerstats.intelligence}</p>
        <p>Strength: {powerstats.strength}</p>
        <p>Speed: {powerstats.speed}</p>
        <p>Durability: {powerstats.durability}</p>
        <p>Power: {powerstats.power}</p>
        <p>Combat: {powerstats.combat}</p>
      </div>
    </div>
  );
}

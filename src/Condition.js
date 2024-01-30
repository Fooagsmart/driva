import React, { useState } from 'react';

const Condition = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  const [showGasPlanets, setShowGasPlanets] = useState(false);

  const filteredPlanets = planets.filter((planet) => planet.isGasPlanet === showGasPlanets);

  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => setShowGasPlanets(!showGasPlanets)} />
        Show Gas Planets
      </label>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet.name}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Condition;

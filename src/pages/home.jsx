import React, { useState } from "react";
import { data } from "../data";
import BarChart from "../component/BarChart";

const Home = () => {
  const initialState = { name: data[0].name, stats: data[0].stats };
  const [playerData, setPlayerData] = useState(initialState);
  const [numOfClick, setNumOfClick] = useState(1);
  const handleClick = () => {
    if (numOfClick > 4) {
      setNumOfClick(0);
    } else {
      setPlayerData({
        name: data[numOfClick].name,
        stats: data[numOfClick].stats,
      });
      setNumOfClick(numOfClick + 1);
    }
    console.log(playerData.stats);
  };

  return (
    <div className="home">
      <h1>Cricketer IPL Total run each year:</h1>
      <button onClick={handleClick}>Next Player</button>
      <div className="graph">
        <h2>name: {playerData.name}</h2>
        {/* <BarChart data={playerData.stats} /> */}
        <BarChart data={playerData.stats} />
      </div>
    </div>
  );
};

export default Home;

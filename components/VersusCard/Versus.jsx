"use client"
// pages/index.js
import { useState } from 'react';
import SportSlider from './SportSlider';
import VersusCard from './VersusCard';

const sportsData = [
  { name: 'Cricket', teams: ['Team A', 'Team B', 'Team C'], date: '2023-01-20' },
  { name: 'Football', teams: ['Team X', 'Team Y', 'Team Z'], date: '2023-01-21' },
  { name: 'Basketball', teams: ['Team D', 'Team E', 'Team F'], date: '2023-01-22' },
];

const generateRandomProbability = () => {
  return (Math.random() * (5 - 0.5) + 0.5).toFixed(2);
};

const generateVersusData = (sportsData) => {
  const versusData = [];

  sportsData.forEach((sport) => {
    const teams = sport.teams;
    for (let i = 0; i < teams.length - 1; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        versusData.push({
          team1: { name: teams[i], sport: sport.name, image: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
          team2: { name: teams[j], sport: sport.name, image: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
          prob1: "2x",
          prob2: "3x",
          prob3: "4x",
          date: sport.date,
        });
      }
    }
  });

  return versusData;
};

const VersusSlider = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [sortedData, setSortedData] = useState(generateVersusData(sportsData));

  const handleSportChange = (sport) => {
    setSelectedSport(sport);

    // Implement your sorting logic here based on the selected sport
    // If "All" is selected, show all versus data
    if (sport === 'All') {
      setSortedData(generateVersusData(sportsData));
    } else {
      // Otherwise, filter data based on the selected sport
      const filteredData = generateVersusData(sportsData).filter(
        (item) => item.team1.sport === sport || item.team2.sport === sport
      );
      setSortedData(filteredData);
    }
  };

  // Function to sort data by team name
  const sortDataByName = () => {
    const sortedByName = [...sortedData].sort((a, b) => a.team1.name.localeCompare(b.team1.name));
    setSortedData(sortedByName);
  };

  return (
    <div className='mr-3'>
      <SportSlider
        sports={['All', ...sportsData.map((sport) => sport.name)]}
        onSportChange={handleSportChange}
      />

      {sortedData.map((item, index) => (
        <VersusCard
          key={index}
          image1={item.team1.image}
          text1={`${item.team1.name} `}
          image2={item.team2.image}
          text2={`${item.team2.name} `}
          team1={item.team1.name}
          team2={item.team2.name}
          prob1={item.prob1}
          prob2={item.prob2}
          prob3={item.prob3}
          sportName={item.team1.sport}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default VersusSlider;

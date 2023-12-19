"use client"
// components/VersusSlider.js
import React, { useState } from 'react';
import SportSlider from './SportSlider';
import VersusCard from './VersusCard';
import gameData from '../../lib/gameData.js'; // Import gameData

const sportsData = [
  { name: 'Cricket', teams: ['India', 'England', 'Australia'], date: '19 Nov 2023',  },
  { name: 'Football', teams: ['Manchester City', 'Real Madrid', 'Brazil'], date: '20 Nov 2023',  },
  { name: 'Basketball', teams: ['Spain', 'USA', 'Argentina'], date: '21 Nov 2023',  },
];

const generateVersusData = (sportsData, gameData) => {
  const versusData = [];

  sportsData.forEach((sport) => {
    const teams = sport.teams;
    const data = gameData.filter((item) => item.sportName === sport.name);

    data.forEach((item) => {
      versusData.push({
        team1: { name: item.team1.name, sport: item.team1.sport, image: item.team1.image },
        team2: { name: item.team2.name, sport: item.team2.sport, image: item.team2.image },
        prob1: item.prob1,
        prob2: item.prob2,
        prob3: item.prob3,
        date: item.date,
        sportName: item.sportName,
        tournament: item.tournament, // Include tournament information
      });
    });
  });

  return versusData;
};

const VersusSlider = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [sortedData, setSortedData] = useState(generateVersusData(sportsData, gameData));

  const handleSportChange = (sport) => {
    setSelectedSport(sport);

    // Implement your sorting logic here based on the selected sport
    // If "All" is selected, show all versus data
    if (sport === 'All') {
      setSortedData(generateVersusData(sportsData, gameData));
    } else {
      // Otherwise, filter data based on the selected sport
      const filteredData = generateVersusData(sportsData, gameData).filter(
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
          text1={`${item.team1.name} (${item.team1.sport})`}
          image2={item.team2.image}
          text2={`${item.team2.name} (${item.team2.sport})`}
          team1={item.team1.name}
          team2={item.team2.name}
          prob1={item.prob1}
          prob2={item.prob2}
          prob3={item.prob3}
          date={item.date}
          sportName={item.sportName}
          tournament={item.tournament} 
        />
      ))}
    </div>
  );
};

export default VersusSlider;

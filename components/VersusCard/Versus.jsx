"use client"
// pages/index.js
import { useState } from 'react';
import SportSlider from './SportSlider';
import VersusCard from './VersusCard';
import BettingSlip from './BettingSlip/BettingSlip';

const sportsData = [
  { name: 'Cricket', teams: ['Team A', 'Team B', 'Team C'] },
  { name: 'Football', teams: ['Team X', 'Team Y', 'Team Z'] },
  { name: 'Basketball', teams: ['Team D', 'Team E', 'Team F'] },
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
          sportName: sport.name,
          date: '19 Nov 2023', // Add a date or fetch from your data
          team1: { name: teams[i], image: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
          team2: { name: teams[j], image: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg' },
          prob1: generateRandomProbability(),
          prob2: generateRandomProbability(),
          prob3: generateRandomProbability(),
        });
      }
    }
  });

  return versusData;
};

const VersusSlider = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [sortedData, setSortedData] = useState(generateVersusData(sportsData));
  const [selectedMatch, setSelectedMatch] = useState(null);

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

  const handleOpenBettingSlip = (match) => {
    setSelectedMatch(match);
  };

  const handleCloseBettingSlip = () => {
    setSelectedMatch(null);
  };

  return (
    <div className='mr-3'>
      <SportSlider
        sports={['All', ...sportsData.map((sport) => sport.name)]}
        onSportChange={handleSportChange}
      />

      {sortedData.map((item, index) => (
        <div key={index} className="relative">
          <VersusCard
            image1={item.team1.image}
            text1={`${item.team1.name} (${item.team1.sport})`}
            image2={item.team2.image}
            text2={`${item.team2.name} (${item.team2.sport})`}
            team1={item.team1.name}
            team2={item.team2.name}
            prob1={item.prob1}
            prob2={item.prob2}
            prob3={item.prob3}
            onOpenBettingSlip={() => handleOpenBettingSlip(item)}
          />
          {selectedMatch && selectedMatch === item && (
            <BettingSlip match={selectedMatch} onClose={handleCloseBettingSlip} />
          )}
        </div>
      ))}
    </div>
  );
};

export default VersusSlider;

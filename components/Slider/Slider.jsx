
"use client"
// pages/index.js
import { useState } from 'react';
import SportSlider from './SportSlider';

const sportsData = [
  { name: 'Cricket', info: 'Cricket information...', image: './public/footballplayer.jpeg' },
  { name: 'Football', info: 'Football information...', image: './public/footballplayer.jpeg' },
  { name: 'Basketball', info: 'Basketball information...', image: './public/footballplayer.jpeg' },
  // Add more sports as needed
];

const Slider = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [sortedData, setSortedData] = useState(sportsData);

  const handleSportChange = (sport) => {
    setSelectedSport(sport);

    // Implement your sorting logic here based on the selected sport
    // If "All" is selected, show all sports data
    if (sport === 'All') {
      setSortedData(sportsData);
    } else {
      // Otherwise, filter data based on the selected sport
      const filteredData = sportsData.filter((item) => item.name === sport);
      setSortedData(filteredData);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-white">Top League</h1>
      <SportSlider
        sports={['All', ...sportsData.map((sport) => sport.name)]}
        onSportChange={handleSportChange}
      />
      {sortedData.map((item) => (
        <div key={item.name} className="border p-4 my-2 bg-gray-900 rounded">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <img src={item.image} alt={`${item.name} Image`} className="max-w-full my-2" />
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;

"use client"
// pages/index.js
import { useState, useRef, useEffect } from 'react';
import MovieCard from './Card';

const moviesData = [
  { name: 'Cricket', info: 'Cricket information...', image: '/images/cricket.png' },
  { name: 'Football', info: 'Football information...', image: '/images/football.jpeg' },
  { name: 'Basketball', info: 'Basketball information...', image: '/images/basketball.jpeg' },
  // Add more sports as needed
];

const Slider = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [sortedData, setSortedData] = useState(moviesData);
  const sliderRef = useRef(null);
  const [hideFirstElement, setHideFirstElement] = useState(false);
  const [hideLastElement, setHideLastElement] = useState(false);

  const handleSportChange = (sport) => {
    setSelectedSport(sport);

    // Implement your sorting logic here based on the selected sport
    // If "All" is selected, show all movie data
    if (sport === 'All') {
      setSortedData(moviesData);
    } else {
      // Otherwise, filter data based on the selected sport
      const filteredData = moviesData.filter((item) => item.name === sport);
      setSortedData(filteredData);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      // Hide the last element and show the scroll indicator
      const hideLast = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
      const hideFirst = slider.scrollLeft === 0;

      setHideLastElement(hideLast);
      setHideFirstElement(hideFirst);
    };

    slider.addEventListener('scroll', handleScroll);

    return () => {
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="flex overflow-x-auto w-full gap-8 relative" ref={sliderRef}>
        {sortedData.map((item, index) => (
          <MovieCard
            key={item.name}
            imageUrl={item.image}
            title={item.name}
            description={item.info}
            buttonText="Watch Now"
            style={{
              marginRight: index < sortedData.length - 1 ? '20px' : '0',
              width: '100%', // Set width to 100% for mobile devices
              boxSizing: 'border-box', // Ensure padding and border are included in the width
            }}
          />
        ))}
      </div>
      {hideFirstElement && (
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
          onClick={() => sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' })}
        >
        </div>
      )}
      {hideLastElement && (
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
          onClick={() => sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' })}
        > 
        </div>
      )}
    </div>
  );
};

export default Slider;

// App.js

import React from 'react';
import AnimalCard from './AnimalCard';
import animalData from './AnimalData';
//import './App.css'; // Import your CSS file for styling

const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Chuyển sang hiển thị theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    gap: '20px', // Khoảng cách giữa các card
  };

  const showAdditionalData = (additional) => {
    if (additional) {
      const dataString = Object.entries(additional)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
      alert(dataString);
    } else {
      alert('No additional information available.');
    }
  };

  return (
    <div className='animal-card-container' style={containerStyle}>
      <h2 style={{ margin: '0',fontSize:'30px' }}>Animals</h2>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
        {animalData.map((animal, index) => (
          <AnimalCard key={index} {...animal} showAdditionalData={showAdditionalData} imageClass={`animal-image-${index}`} imageSize='350px' imageHeight='350px'/>
        ))}
      </div>
    </div>
  );
};

export default App;

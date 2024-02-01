import PropTypes from 'prop-types';
import React from 'react';
import './AnimalCard.css';

const AnimalCard = ({ name, scientificName, size, diet, additional, showAdditionalData, image, imageClass, imageSize, imageHeight }) => {
  return (
    <div className='animal-card' style={{ border: '2px solid #FEC000', borderRadius: '10px' }}>
      <div className='image-container'>
        <img
          className={`animal-image ${imageClass}`}
          src={require(`./${image}`).default}
          alt={name}
          style={{ maxWidth: imageSize, height: imageHeight, borderRadius: '10px' }}
        />
      </div>
      <div className='content-container'>
        <h2 style={{ paddingLeft: '20px', color: '#DC3545', fontSize: '35px' }}>{name}</h2>
        <div className='content'>
          <div className='info-container'>
            <div className='info-frame1'>
              <p><strong style={{fontWeight:'inherit'}}>Scientific Name:</strong></p>
              <p style={{ paddingLeft: '5px'}}>{scientificName}</p>
            </div>
            <div className='info-frame2'>
              <p><strong></strong></p>
              <p>{size}</p>
            </div>
            <div className='info-frame3'>
              <p><strong></strong></p>
              <p>{diet.join(', ')}</p>
            </div>
          </div>
          <div className='button'>
            <button
              onClick={() => showAdditionalData(additional)}
              style={{
                fontSize: '25px',
                fontFamily: 'Your Font Name, sans-serif', // Replace 'Your Font Name' with the desired font
                borderRadius: '5px',
                color: 'white',
                background: '#DC3545',
                border: '1px solid #DC3545'
              }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AnimalCard.propTypes = {
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string
  }),
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  showAdditionalData: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
};

AnimalCard.defaultProps = {
  additional: {
    notes: 'No Additional Information'
  }
};

export default AnimalCard;

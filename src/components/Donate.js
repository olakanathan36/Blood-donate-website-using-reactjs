import React, { useState } from 'react';
import './donate.css';
const LearnAboutDonation = () => {
  const [selectedBloodType, setSelectedBloodType] = useState(null);

  const bloodTypes = {
    'O+': {
      canTake: ['O+', 'O-'],
      canGive: ['O+', 'A+', 'B+', 'AB+'],
    },
    'O-': {
      canTake: ['O-'],
      canGive: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],
    },
    'A+': {
      canTake: ['A+', 'A-', 'O+', 'O-'],
      canGive: ['A+', 'AB+'],
    },
    
    'B+': {
      canTake: ['O+', 'O-', 'B+', 'B-'],
      canGive: ['B+', 'AB+'],
    },
    'A-':{

    }
  };

  return (
    <div className='learn-about-donation'>
      <div className='sections'>
        <h1>Learn About Donation</h1>
        <p>Select your Blood Type</p>
        <div className='section1'>
          {Object.keys(bloodTypes).map((type) => (
            <button 
              key={type} 
              className={`bloodtype ${selectedBloodType === type ? 'active' : ''}`}
              onClick={() => setSelectedBloodType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {selectedBloodType && (
        <div className='info-section'>
          <div className='tag1'>
          <div className='info-can-take'>
            <div className='info-title'>You can take from</div>
            <div>{bloodTypes[selectedBloodType].canTake.join(', ')}</div>
          </div>
          <div className='info-can-give'>
            <div className='info-title'>You can give to</div>
            <div>{bloodTypes[selectedBloodType].canGive.join(', ')}</div>
          </div>
        </div>
        <div className='tag2'>
          <div className='donation-image'>
            <img src='/path/to/image.png' alt='Donation' />
            <p>One Blood Donation can save up to Three Lives</p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default LearnAboutDonation;

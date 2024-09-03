import React, { useState } from 'react';
import './header.css';
import img1 from './img/pixelcut-export.png';
import { FaUser, FaHeartbeat, FaHandHoldingMedical } from 'react-icons/fa';
import BloodDonationInfo from './donation';
const Home = () => {
  const [selectedBloodType, setSelectedBloodType] = useState(null);

  const bloodTypes = {
    'O+': { canTake: ['O+', 'O-'], canGive: ['O+', 'A+', 'B+', 'AB+'] },
    'O-': { canTake: ['O-'], canGive: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'] },
    'A+': { canTake: ['A+', 'A-', 'O+', 'O-'], canGive: ['A+', 'AB+'] },
    'A-': { canTake: ['A-', 'O-'], canGive: ['A+', 'A-', 'AB+', 'AB-'] },
    'B+': { canTake: ['O+', 'O-', 'B+', 'B-'], canGive: ['B+', 'AB+'] },
    'B-': { canTake: ['B-', 'O-'], canGive: ['B+', 'B-', 'AB+', 'AB-'] },
    'AB+': { canTake: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'], canGive: ['AB+'] },
    'AB-': { canTake: ['AB-', 'A-', 'B-', 'O-'], canGive: ['AB+', 'AB-'] }
  };

  return (
    <div className='bodymaintag'>
      <div className="bodycontent">
          <img src={img1} alt="Blood Donation" className="background-img" />
          <div className="overlay">
              <div className="maincontent">
                  <h1>DONATE BLOOD AND GET REAL BLESSING</h1>
                  <p>Blood is the most precious gift that anyone can give to another person</p>
                  <p>Donating blood not only saves lives but also saves the donor's life</p>
                  <button className="donate-today-btn">DONATE TODAY</button>
              </div>
          </div>
      </div>
      <div className='scroll-content'>
        <div className='countmention'></div>
        <div className='services'>
          <h1>Our Services</h1>
          <div className='service-item'>
              <a href="/blood-search">
                <i className="fas fa-search"></i>
                <p>Blood Availability Search</p>
              </a>
          </div>
          <div className='service-item'>
            <a href="/blood-bank-directory">
              <i className="fas fa-tint"></i>
              <p>Blood Bank Directory</p>
            </a>
          </div>
          <div className='service-item'>
            <a href="/donation-camp">
              <i className="fas fa-heart"></i>
              <p>Blood Donation Camp</p>
            </a>
          </div>
          <div className='service-item donar'>
            <a href="/donor-login">
              <i className="fas fa-user"></i>
              <p>Donor Login</p>
            </a>
          </div>
          <div className='service-item'>
            <a href="/register-camp">
              <i className="fas fa-plus-circle"></i>
              <p>Register Voluntary Blood Camp</p>
            </a>
          </div>
        </div>
      </div>
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

      {/* how donation work */}
      <div className='donatework'>
      <h1>How <span style={{color:'red'}}>Donation</span> Works ?</h1>
      <div className='donationprocess'>
        
      <div className='stage1'>
  <FaUser size={40} color="#d9534f" />
  <h3 style={{color:'red'}}>Registration Process</h3>
  <p>Sign up and schedule your first with ease</p>
</div>

<div className='stage1'>
  <FaHeartbeat size={40} color="#d9534f" />
  <h3 style={{color:'red'}}>Health Screening</h3>
  <p>A simple check-up to ensure you’re ready to donate</p>
</div>
<div className='stage1'>
  <FaHandHoldingMedical size={40} color="#d9534f" />
  <h3 style={{color:'red'}}>Donation day</h3>
  <p>Relax as our professional staff guide you through</p>
</div>

      </div>
      </div>
      <div className='typeofdonation'>
         <div className='donationtype'>
          <BloodDonationInfo/>
        </div>
      </div>
    </div>
  );
}

export default Home;

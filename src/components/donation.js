import React, { useState } from 'react';
import './donate.css';
const BloodDonationInfo = () => {
  const [selectedComponent, setSelectedComponent] = useState('Red blood cell');

  const content = {
    'Red blood cell': {
      title: 'Red Blood Cell Donation',
      description: 'Red blood cells carry oxygen from your lungs to the rest of your body. Donating red blood cells can help patients who need more red blood cells due to surgery, trauma, or chronic illnesses.',
    },
    Platelet: {
      title: 'Platelet Donation',
      description: 'Platelets are essential for blood clotting. Donating platelets can benefit cancer patients, organ transplant recipients, and others in need of this critical blood component.',
    },
    Plasma: {
      title: 'Plasma Donation',
      description: 'Plasma is the liquid portion of your blood that carries cells and proteins throughout the body. Plasma donations help patients with severe burns, shock, and liver disease.',
    },
  };

  return (
    <div className='blood-donation-info'>
      <h1>Types of<span style={{color:'red'}}>BLOOD</span> Donation</h1>
      <p>The average human body contains about five litres of blood, which is made of several cellular and non-cellular components such as:</p>
      <div className='blood-components'>
        <button onClick={() => setSelectedComponent('Red blood cell')}>Red blood cell</button>
        <button onClick={() => setSelectedComponent('Platelet')}>Platelet</button>
        <button onClick={() => setSelectedComponent('Plasma')}>Plasma</button>
      </div>
      <div className='component-details'>
        <h2>{content[selectedComponent].title}</h2>
        <p>{content[selectedComponent].description}</p>
      </div>
    </div>
  );
};

export default BloodDonationInfo;

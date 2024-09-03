import React, { useState } from 'react';

function Request() {
  const [requestData, setRequestData] = useState({
    patientName: '',
    bloodGroup: '',
    hospital: '',
    contact: ''
  });

  const handleChange = (e) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit request data to the backend or display a success message
    alert('Blood request submitted!');
  };

  return (
    <div>
      <h2>Request Blood</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input type="text" name="patientName" value={requestData.patientName} onChange={handleChange} required />
        </label>
        <label>
          Blood Group:
          <input type="text" name="bloodGroup" value={requestData.bloodGroup} onChange={handleChange} required />
        </label>
        <label>
          Hospital:
          <input type="text" name="hospital" value={requestData.hospital} onChange={handleChange} required />
        </label>
        <label>
          Contact:
          <input type="tel" name="contact" value={requestData.contact} onChange={handleChange} required />
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default Request;

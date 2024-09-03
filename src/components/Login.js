import React  from 'react';
import { Link } from 'react-router-dom';

import './ancertag.css';
export default function Login(){
    return(
        <div className="login">
            <div className='main'>
                <h1>User Login</h1>
                <div className='box'>
                    <div className='box1'>
                        <label>Enter Mobile No:</label><br></br>
                        <input placeholder='Enter number'></input>
                        <button>Generate OTP</button>
                    </div>
                    <div className='box2'>
                        <h1>Register Now</h1>
                        <p><i className="fas fa-check-circle green-tick"></i>View/Add your Donations</p>
                        <p><i className="fas fa-check-circle green-tick"></i>Update your profile</p>
                        <p><i className="fas fa-check-circle green-tick"></i>Manage your Account</p>
                        <button>Register Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
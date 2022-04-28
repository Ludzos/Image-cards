import React from 'react';
import './GridView.css';
import Browncard from '../Assets/GridCard/Browncard.svg';
import Mail from '../Assets/Icons/Mail.svg';
import Phone from '../Assets/Icons/Phone.svg';



function GridView({userData}) {


  

  return (
    <div className="card" style={{backgroundImage: `url(${Browncard})`}}>
      <div className="card-wrapper">
          <div className="user-name">{userData.name.first} {userData.name.last}</div>
        
        <div className='card-content'>
          
          <img className='user-avatar' src={userData.picture.medium} alt=""/>
          <div className="user-location">{userData.location.city}</div>

          <div className="user-contact">    
            <img height={19} src={Mail} alt="svg"/>
            <img height={19} src={Phone} alt="svg"/>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default GridView
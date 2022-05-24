import React from 'react';
import './GridView.css';
import Browncard from '../Assets/GridCard/Browncard.svg';
import Greencard from '../Assets/GridCard/Greencard.svg';
import Orangecard from '../Assets/GridCard/Orangecard.svg';
import Mail from '../Assets/Icons/Mail.svg';
import Phone from '../Assets/Icons/Phone.svg';



function GridView({userData, index}) {

  // Array with SVG images
  const cardImages = [Greencard, Browncard, Orangecard, Browncard, Orangecard, Greencard, ]; 

  // Function to render SVG images
  const getBackgroundImage = (index) => cardImages[index % cardImages.length]



  return (

    <div className="card-grid" style={{backgroundImage: `url(${getBackgroundImage(index)})`}}>

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
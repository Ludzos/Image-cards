import React from 'react';
import './ListView.css';
import Green from '../Assets/ListCard/Green.svg';
import Brown from '../Assets/ListCard/Brown.svg';
import Orange from '../Assets/ListCard/Orange.svg';
import Mail from '../Assets/Icons/Mail.svg'
import Phone from '../Assets/Icons/Phone.svg'



function ListView({ userData, index}) { 

  // Array with SVG images
  const cardImages = [Green, Brown, Orange, Brown, Orange, Green];

  // Function to render SVG images
  const getBackgroundImage = (index) => cardImages[index % cardImages.length]

 
 
  return ( 
  
        <div className="list-card" style={{backgroundImage: `url(${getBackgroundImage(index)})`}}>

          <div className="list-card-wrapper">
            <div className="list-user-image">            
              <img  src={userData.picture.medium} alt=""/>
            </div>

            <div className="list-user-info">
              <div className="list-user-name">{userData.name.first} {userData.name.last}</div>          
              <div className="list-user-location">{userData.location.city}</div>
            </div>

            <div className="list-user-contact">    
              <img height={19} src={Mail} alt="svg"/>
              <img height={19} src={Phone} alt="svg"/>
            </div>
        </div>
      
    </div>
  

  );

}

export default ListView;
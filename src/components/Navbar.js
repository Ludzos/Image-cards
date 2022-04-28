import React from 'react';
import './Navbar.css';
import Sorting from '../Assets/Icons/Sorting.svg';
import Searchicon from '../Assets/Icons/Searchicon.svg';
import ThumbnailIcon from '../Assets/Icons/ThumbnailIcon.svg';
import ListIcon from '../Assets/Icons/ListIcon.svg';



function Navbar( {list, sortType, setList, filter, sortByName, setSortType }) { 


  return (

      <div className="nav-container">     

          <div className="search-wrapper">
            <img width={17} src={Searchicon} alt='svg' />
            <input onChange={(e) => filter(e)} className="search-box" placeholder=''/>              
          </div>

          <div className='button-wrapper'>
          
              <img className="sortingIcon" style={{cursor: "pointer"}} width={25} src={Sorting} alt='svg' onClick={() =>{ 
                setSortType(!sortType);
                sortByName()
              }} />

              <div className="toggle-button">                       
                <img 
                onClick={()=> setList(!list)}
                style={{cursor:'pointer'}}
                width={24} 
                height={23} 
                src={list ? ThumbnailIcon : ListIcon} alt='svg'
                />              
              </div> 

        </div>
    </div>

  )
}

export default Navbar
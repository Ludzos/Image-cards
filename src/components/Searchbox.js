import React from 'react';
import './Searchbox.css';
import Sorting from '../Assets/Icons/Sorting.svg';
import SearchIcon from '../Assets/Icons/Searchicon.svg';
import GridIcon from '../Assets/Icons/GridIcon.svg';
import ListIcon from '../Assets/Icons/ListIcon.svg';



function Searchbox( {list, sortType, setList, filter, sortByName, setSortType }) { 
 

  return (

      <div className="searchbox">

          <div className="search-wrapper">
              <img width={17} src={SearchIcon} alt='svg' />
              <input 
                onChange={(e) => filter(e)} 
                className="search-box" 
                placeholder=''
              />

          </div>

            <div className='button-wrapper'>          
              <img 
                className="sortingIcon" 
                style={{cursor: "pointer"}} 
                width={25} 
                src={Sorting} 
                alt='svg' 
                onClick={() =>{ 
                  setSortType(!sortType);
                  sortByName()
                }} 
              />            

            <div className="toggle-button"> 
              <img 
                onClick={()=> setList(!list)}
                style={{cursor:'pointer'}}
                width={24} 
                height={23} 
                src={list ? GridIcon : ListIcon} alt='svg' //
                />          

            </div> 

        </div>
    </div>

  )
}

export default Searchbox;
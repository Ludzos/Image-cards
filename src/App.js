import { useState, useEffect, lazy, Suspense } from "react";
import Searchbox from './components/Searchbox';
import './App.css';
import ReactLoading from 'react-loading';
import './index.css';

const GridView = lazy(() => import('./components/GridView'));
const ListView = lazy(() => import('./components/ListView'));

function App() {  

  const [ users, setUsers ] = useState([]);
  const [ allUsers, setAllUsers ] = useState([]);
  const [ sortType, setSortType ] = useState(false);
  const [ listView, setListView ] = useState(false);

  let offset = 0; 
  

  const loadMoreUsers = () => {
    (async () => {
          let userData;
          try {
            const response = await fetch(`https://randomuser.me/api/?results=10&offset=${offset}`);
            userData = (await response.json()).results;
          } catch (error) {
            console.log(error);
            userData = [];
          }
          setAllUsers(userData)
          setUsers((oldUser) => [...oldUser, ...userData]); // Already loaded users wont disappear during newly added users
              
        }) ();
        offset += 10; // Adds 10 more users during scroll
  }


 // Infinite scroll 
  const handleScroll = (e) => {
    if ( 
      window.innerHeight + e.target.documentElement.scrollTop + 1 >= 
      e.target.documentElement.scrollHeight
      ) {
        loadMoreUsers();
      }
  }

  useEffect((e) => {    
    loadMoreUsers();
    window.addEventListener("scroll", handleScroll)    
  },[]);


  // search by name functionality
  const cardFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(
      user => (`${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(value)
      )
    );
      setUsers(filteredUsers)
     
  };

// Ascending and Descending functionality
const sortByName = () => {
  const sortAsc = users.sort((a,b) => {   
    const isReversed = sortType ? 1 : -1;
    return isReversed * a.name.first.localeCompare(b.name.first)
  });

  setUsers(sortAsc)
}




  return (
    <div className="App"> 

      <h1>Meet The Team</h1>

        <div className="container">      

            <Searchbox className="Search-box"
            setList={setListView} 
            list={listView} 
            filter={cardFilter} 
            sortType={sortType} 
            sortByName={sortByName} 
            setSortType={setSortType} 
            />  

        <div className="view">

              { /* Suspense: lazy-load componenet wrap, <ReactLoad/> an icon while loading */}
              <Suspense fallback={<div className="lazy-loading"><ReactLoading/></div>}>
                
                { /* Conditional operator for switching between Grid and Listview. Map() to add user data for both components*/}
                
                { listView 
                  ? users.map((user,index) => (<ListView  userData={user} key={index} index={index} />))  
                  : users.map((user, index)=> (<GridView userData={user} key={index} index={index} />))         
                }
              
              </Suspense>
        </div>

      </div>

      
    </div>

  );
}

export default App;

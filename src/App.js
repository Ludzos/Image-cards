import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from './components/Navbar';
import './App.css';
import ReactLoading from 'react-loading';
// import GridView from './components/GridView';
// import ListView from './components/ListView';
const GridView = lazy(() => import('./components/GridView'));
const ListView = lazy(() => import('./components/ListView'));

function App() {  

  const [ users, setUsers ] = useState([]);
  const [ allUsers, setAllUsers ] = useState([]);
  const [ sortType, setSortType ] = useState(false);
  const [ listView, setListView ] = useState(false);
 
  const loadMoreUsers = () => {
    (async () => {
          let userData;
          try {
            const response = await fetch('https://randomuser.me/api/?results=50');
            userData = (await response.json()).results;
          } catch (error) {
            console.log(error);
            userData = [];
          }
          setAllUsers(userData)
          setUsers(userData);
               
        })();
  }

  useEffect(() => {
    loadMoreUsers();
  }, []);


  // useEffect(() => {
  //   (async () => {
  //     let userData;
  //     try {
  //       const response = await fetch('https://randomuser.me/api/?results=50');
  //       userData = (await response.json()).results;
  //     } catch (error) {
  //       console.log(error);
  //       userData = [];
  //     }
  //     setAllUsers(userData)
  //     setUsers(userData);      
  //   })();
  // }, []);

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

      <Navbar className="Navbar"
      setList={setListView} 
      list={listView} 
      filter={cardFilter} 
      sortType={sortType} 
      sortByName={sortByName} 
      setSortType={setSortType} 
      />  
        <div className="view">
              <Suspense fallback={<div className="lazy-loading"><ReactLoading/></div>}>
                
                {          
                listView ? users.map((user,index) => (<ListView userData={user} key={index}/>))          
                  : 
                users.map((user, index)=> (<GridView userData={user} key={index}/>))         
                }
              
              </Suspense>
        </div>

      </div>

      
    </div>

  );
}

export default App;

import React from 'react'
import {useEffect, useState} from 'react';

function Data() {

  const [staff, setStaff] = useState([]);
  

  useEffect(() => {
    (async () => {
      let staffData;
      try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        staffData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        staffData = [];
      }

      setStaff(staffData);
    })();
  }, []);


  return (
    <div>Data</div>
  )
}

export default Data
import { useState, useEffect } from 'react'
import reactLogo from './assets/SpaceX_Logo.png'
//import './App.css'
import * as API from "./services/launches";
import {Box}  from "@chakra-ui/react"

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
   <>
   <img   src={reactLogo} width={300}></img>
   <h1>SpaceX Launches</h1>
<ul>
  {launches.map((launch) => (
    <Box p={20} key={launch.flight_number} >
      {launch.mission_name}({launch.launch_year})
    </Box>
  ))}
  </ul>
    </>
  );
}

//export default App

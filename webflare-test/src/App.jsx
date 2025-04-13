import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Custom Comopnents
import LotTable from './LotTable'

// Bootstraped components
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';

function App() {
  const [count, setCount] = useState(0);
  
   // Top Level Information
   const [totalLotCount, totalLotsSetter] = useState(0);
   const [totalEstimatedValueLowerCount, totalEstimatedValueLowerSetter] = useState(0); {/* maybe eventually just make sql script to get this avoid startup calc?*/}
   const [totalEstimatedValueUpperCount, totalEstimatedValueUpperSetter] = useState(0);

    // List component array
    const [totalListValues, totalListValuesSetter] = useState([]);
    const [selectedListValues, selectedListValuesSetter] = useState([]);

  return (
    <>
      <h1>
        Catalog
      </h1>
      <div>
        <b>
          Total Lots: {totalLotCount} 
        </b>
      </div>
      <div>
        <b>
          Total Estimated Value: {totalEstimatedValueLowerCount} - {totalEstimatedValueUpperCount}
        </b>
      </div>
      <div>
        <Button>
          Duplicate
        </Button>
        <Button>
          Delete
        </Button>
      </div>

      <LotTable />


      {/*
      From default Vite project

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
};

export default App

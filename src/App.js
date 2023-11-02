import logo from './logo.svg';
import './App.css';
import Chart from './Components/Chart';
import React from 'react';
import PieChart from './Components/PieChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chart/>
        <PieChart/>
        <h2>Welcome to React Chart</h2>        
      </header>
    </div>
  );
}
export default App; 

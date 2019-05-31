import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay />

      <NumberButton number="clear" buttonStyle="clear" />
      <ActionButton symbol="/" buttonStyle="action" />
      <NumberButton number="7" buttonStyle="number" />
      <NumberButton number="8" buttonStyle="number" />
      <NumberButton number="9" buttonStyle="number" />

      


    </div>
  );
};

export default App;

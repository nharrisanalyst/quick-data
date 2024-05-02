import React from 'react';
import QuickData from './apps/QuickData';
import './App.scss';

function App() {
  return (
    <div className="App"  data-testid="main-app" >
      <QuickData />
    </div>
  );
}

export default App;

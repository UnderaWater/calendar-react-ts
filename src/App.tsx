import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header';

function App() {
  return (
    <div className="caledar">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;

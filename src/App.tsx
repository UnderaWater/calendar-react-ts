import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';

function App() {
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setUser({email: localStorage.getItem('email' || '')} as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <div className="caledar">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;

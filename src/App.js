import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import ListAnnonce from './pages/ListAnnonce';
import { Accueil } from './pages/Accueil';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<ListAnnonce />} />
        </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import ListAnnonce from './pages/ListAnnonce';
import { Accueil } from './pages/Accueil';
import Annonces from './pages/Annonces';
import Message from './pages/Message';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<ListAnnonce />} />
          <Route path='/list-annonce' element={<Annonces />} />
          <Route path='/message' element={<Message />} />
        </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import ListAnnonce from './pages/ListAnnonce';

function App() {

  return (
    <Router>
      <div className='container mt-10'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<ListAnnonce />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

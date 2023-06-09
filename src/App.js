import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Watch from './pages/Watch';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;

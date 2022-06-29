import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe';
import Experiences from './pages/Experiences';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >      
        <Route path='/' element={<App />}/>
        <Route path='/project' element={<Projects/>} />
        <Route path='/experience' element={<Experiences/>} />
        <Route path='/about%20me' element={<AboutMe/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

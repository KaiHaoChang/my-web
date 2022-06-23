import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Projects from './pages/Projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >      
        <Route path='/' element={<App />}/>
        <Route path='/project' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

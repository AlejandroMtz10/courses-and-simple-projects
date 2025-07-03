import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Videogames from './pages/Videogames';
import Consoles from './pages/Consoles';
import Clasifications from './pages/Clasifications';

function App() {
  return (
    <BrowserRouter basename="/videogames">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="videogames" element={<Videogames />} />
          <Route path="consoles" element={<Consoles />} />
          <Route path="clasifications" element={<Clasifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
// import VideogamesPage from './pages/VideogamesPage';
// import ConsolesPage from './pages/ConsolesPage';
// import ClasificationsPage from './pages/ClasificationsPage';

function App() {
  return (
    <BrowserRouter basename="/videogames">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="videogames" element={<VideogamesPage />} />
          <Route path="consoles" element={<ConsolesPage />} />
          <Route path="clasifications" element={<ClasificationsPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

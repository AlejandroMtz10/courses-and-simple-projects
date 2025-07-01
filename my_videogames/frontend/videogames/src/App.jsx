import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
//import VideogamesPage from './pages/VideogamesPage';
//import ConsolesPage from './pages/ConsolesPage';
//import ClasificationsPage from './pages/ClasificationsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/videogames" element={<VideogamesPage />} />
        <Route path="/consoles" element={<ConsolesPage />} />
        <Route path="/clasifications" element={<ClasificationsPage />*/}
      </Routes>
    </Router>
  );
}

export default App;
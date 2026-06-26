import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Tasks from './Tasks';
import FinanceTracker from './FinanceTracker';
import Gratitude from './Gratitude';

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#faf9f6', minHeight: '100vh', paddingBottom: '40px' }}>
        
        {/* Navigation bar */}
        <nav style={{ background: '#4a5d4e', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', letterSpacing: '1px' }}>Personal Planner</Link>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/Tasks" style={{ color: '#eef2ee', textDecoration: 'none', fontSize: '14px' }}>Tasks</Link>
            <Link to="/FinanceTracker" style={{ color: '#eef2ee', textDecoration: 'none', fontSize: '14px' }}>FinanceTracker</Link>
            <Link to="/Gratitude" style={{ color: '#eef2ee', textDecoration: 'none', fontSize: '14px' }}>Gratitude</Link>
          </div>
        </nav>

        {/* Dynamic Route Content */}
        <div style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/FinanceTracker" element={<FinanceTracker />} />
            <Route path="/Gratitude" element={<Gratitude />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
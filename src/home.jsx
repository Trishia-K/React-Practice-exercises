import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function Home() {
  const cardStyle = {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
    textDecoration: 'none',
    color: '#333',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    border: '1px solid #f0eee9',
    transition: 'transform 0.2s'
  };

  return (
    
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ letterSpacing: '3px', color: '#4a5d4e', fontSize: '32px', margin: '0 0 10px 0' }}>Your Daily Personal Planner</h1>
        <p style={{ fontStyle: 'italic', color: '#7a8a7e', margin: 0 }}>Align your routine</p>
      </div>

      {/* Navigation Menu Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        <Link to="/Tasks" style={cardStyle}>
          <span style={{ fontSize: '35px' }}></span>
          <span>My To do list</span>
        </Link>

        <Link to="/FinanceTracker" style={cardStyle}>
          <span style={{ fontSize: '35px' }}></span>
          <span>My Finance Tracker</span>
        </Link>

        <Link to="/gratitude" style={cardStyle} { ...{style: {...cardStyle, gridColumn: '1 / -1'}} }>
          <span style={{ fontSize: '35px' }}></span>
          <span>Daily Gratitude Jar</span>
        </Link>

      </div>
    </div>
   
  );
}

export default Home;
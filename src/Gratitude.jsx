import React, { useState, useEffect } from 'react';

function Gratitude() {
  const [gratitudes, setGratitudes] = useState([]);
  const [gratitudeText, setGratitudeText] = useState('');

  // 1. GET: Pull gratitudes from backend on load
  useEffect(() => {
    fetch('http://localhost:5000/api/gratitude')
      .then(res => res.json())
      .then(data => setGratitudes(data))
      .catch(err => console.error("Error fetching gratitudes:", err));
  }, []);

  // 2. POST: Push new gratitude to backend
  const handleAddGratitude = (e) => {
    e.preventDefault();
    if (!gratitudeText.trim()) return;

    const newGratitudePackage = {
      text: gratitudeText
    };

    fetch('http://localhost:5000/api/gratitude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGratitudePackage)
    })
      .then(res => res.json())
      .then(savedGratitude => {
        setGratitudes([...gratitudes, savedGratitude]);
        setGratitudeText('');
      })
      .catch(err => console.error("Error saving gratitude:", err));
  };
  
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#4a5d4e' }}>Daily Gratitude Overflow</h2>
      <form onSubmit={handleAddGratitude} style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
        <input 
          placeholder="Today, I am overflowing with gratitude for..." 
          value={gratitudeText} 
          onChange={e => setGratitudeText(e.target.value)}
          style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}
        />
        <button type="submit" style={{ background: '#4a5d4e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px' }}>Record</button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {gratitudes.map(g => (
          <div key={g.id} style={{ background: '#faf6ee', borderLeft: '4px solid #d2b48c', padding: '12px', borderRadius: '4px', fontSize: '15px' }}>
            * {g.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gratitude;
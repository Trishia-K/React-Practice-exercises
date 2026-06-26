import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

function Gratitude() {
  const [gratitudes, setGratitudes] = useState([]);
  const [gratitudeText, setGratitudeText] = useState('');

  const handleAddGratitude = (e) => {
    e.preventDefault();
    if (!gratitudeText.trim()) return;
    setGratitudes([...gratitudes, { id: Date.now(), text: gratitudeText }]);
    setGratitudeText('');
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
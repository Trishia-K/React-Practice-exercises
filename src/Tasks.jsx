import React, { useState, useEffect } from 'react';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [taskname, setTaskname] = useState('');
  const [tasktype, setTasktype] = useState('Spirit');

  //Pulls tasks from backend when page opens
  useEffect(() => {
    fetch('http://localhost:5000/api/Tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  const handleaddTask = (e) => {
    e.preventDefault();
    if (!taskname.trim()) return;

    const newTaskPackage = {
      text: taskname,
      type: tasktype
    };

    fetch('http://localhost:5000/api/Tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTaskPackage)
    })
      .then(res => res.json())
      .then(savedTask => {
        setTasks([...tasks, savedTask]);
        setTaskname('');
      })
      .catch(err => console.error("Error saving task:", err));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '450px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#4a5d4e' }}>My Tasks</h2>
      <form onSubmit={handleaddTask} style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
        <input 
          placeholder="Schedule a task..." 
          value={taskname} 
          onChange={e => setTaskname(e.target.value)}
          style={{ flex: 2, padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
        />
        <select value={tasktype} onChange={e => setTasktype(e.target.value)} style={{ padding: '10px' }}>
          <option value="Spirit">Spirit</option>
          <option value="Mind">Mind</option>
          <option value="Body">Body</option>
        </select>
        <button type="submit" style={{ background: '#4a5d4e', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '6px' }}>Add</button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee' }}>
            <span>{task.text}</span>
            <span style={{ fontSize: '12px', background: '#eef2ee', padding: '4px 8px', borderRadius: '12px' }}>{task.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
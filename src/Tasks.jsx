import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

export default function Tasks() {
    function Tasks(){
        const [tasks, setTasks]= useState([]);
        const [taskname, setTaskname]= useState('');
        const [tasktype, setTasktype]= useState('Spirit');

        const handleaddTask= (e)=>{
            e.preventDefault();
            if (!taskname.trim())
                return;
            setTasks([...tasks, { id: Date.now(), text: taskText, type: taskType }]);
    setTaskText('');
        };
    }
  return (
   
    <div>Tasks</div>
    
  );
}

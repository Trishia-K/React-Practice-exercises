import React, { useState } from 'react';

function FinanceTracker() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [expenseText, setExpenseText] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!expenseText.trim() || !expenseAmount) return;
    setExpenses([...expenses, { id: Date.now(), text: expenseText, amount: parseFloat(expenseAmount) }]);
    setExpenseText('');
    setExpenseAmount('');
  };

  const incomeNum = parseFloat(income) || 0;
  const titheAmount = incomeNum * 0.10; // 10% Auto-Tithe
  const savingsAmount = incomeNum * 0.15; // 15% Auto-Savings
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const freeSpendingMoney = incomeNum - titheAmount - savingsAmount - totalExpenses;

  return (
    <div style={{ padding: '20px', maxWidth: '450px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#4a5d4e' }}>Finance Tracker</h2>
      
      <input 
        type="number" 
        placeholder="Enter Income: " 
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        style={{ width: '95%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ddd' }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', backgroundColor: '#f4f6f4', padding: '15px', borderRadius: '8px', marginBottom: '15px' }}>
        <div>
          <span style={{ fontSize: '12px', color: '#666' }}>Tithe (10%)</span>
          <h4 style={{ margin: '5px 0', color: '#b8860b' }}>{titheAmount.toFixed(2)}</h4>
        </div>
        <div>
          <span style={{ fontSize: '12px', color: '#666' }}>Savings (15%)</span>
          <h4 style={{ margin: '5px 0', color: '#2e8b57' }}>{savingsAmount.toFixed(2)}</h4>
        </div>
      </div>

      <div style={{ padding: '12px', backgroundColor: freeSpendingMoney < 0 ? '#fce8e6' : '#edf7ed', borderRadius: '6px', textAlign: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '12px', color: '#555' }}>Spending Money Left:</span>
        <h3 style={{ margin: '5px 0', color: freeSpendingMoney < 0 ? 'red' : 'green' }}>{freeSpendingMoney.toFixed(2)}</h3>
      </div>

      <form onSubmit={handleAddExpense} style={{ display: 'flex', gap: '5px' }}>
        <input placeholder="Expense description" value={expenseText} onChange={e => setExpenseText(e.target.value)} style={{ flex: 2, padding: '8px' }} />
        <input type="number" placeholder="Cost: " value={expenseAmount} onChange={e => setExpenseAmount(e.target.value)} style={{ flex: 1, padding: '8px' }} />
        <button type="submit" style={{ background: '#4a5d4e', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px' }}>Log</button>
      </form>
    </div>
  );
}

export default FinanceTracker;
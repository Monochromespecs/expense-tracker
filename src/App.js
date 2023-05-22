import React from 'react';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(2023, 4, 20),
      amount: 799.49,
      title: "New TV",
    },
    {
      id: "e2",
      date: new Date(2021, 2, 28),
      amount: 294.67,
      title: "Car Insurance",
    },
    {
      id: "e3",
      date: new Date(2021, 5, 12),
      amount: 450,
      title: "New Desk (Wooden)",
    },
    {
      id: "e4",
      date: new Date(2021, 7, 14),
      amount: 94.12,
      title: "Toiler Paper",
    },
  ];

  return (
    <div>
      <h2>Let's Go Josh!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

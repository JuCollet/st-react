import React from 'react';
import '../styles/styles.less';
import MonthlyRevenues from './cards/MonthlyRevenues';
import YearlyExpenses from './cards/YearlyExpenses';
import YearlyEvolution from './cards/YearlyEvolution';
import ExpensesList from './cards/ExpensesList/ExpensesList';

const Statistics = () => (
  <div className="app-content">
    <span className="app-content-title">Statistiques</span>
    <MonthlyRevenues />
    <YearlyExpenses />
    <YearlyEvolution />
    <ExpensesList />
  </div>
);

export default Statistics;

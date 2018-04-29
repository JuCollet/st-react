import React from 'react';
import '../styles/styles.less';
import MonthlyRevenues from './cards/MonthlyRevenues';
import YearlyExpenses from './cards/YearlyExpenses';

const Statistics = () => (
  <div className="app-content views-stats">
    <span className="app-content-title">Statistiques</span>
    <MonthlyRevenues />
    <YearlyExpenses />
  </div>
);

export default Statistics;

import React from 'react';
import { Doughnut } from 'react-chartjs';

const data = [
  {
    value: 300,
    color: '#56ccf2',
    highlight: '#74d3f2',
    label: 'Frais',
  },
  {
    value: 50,
    color: '#546275',
    highlight: '#5f6a77',
    label: 'Investissements',
  },
  {
    value: 100,
    color: '#9b9b9b',
    highlight: '#c6c4c4',
    label: 'Pertes',
  },
];

const YearlyExpenses = () => (
  <div className="card card-sm">
    <span className="card-title">Dépenses annuelles</span>
    <Doughnut data={data} height="175" width="200" />
    <span className="card-link">Vue détaillée</span>
  </div>
);

export default YearlyExpenses;

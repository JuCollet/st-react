import React from 'react';
import { Bar } from 'react-chartjs';

const data = {
  labels: [2015, 2016, 2017, 2018],
  datasets: [
    {
      label: '2017',
      fillColor: 'rgba(86,204,242,1)',
      strokeColor: 'rgba(86,204,242,1)',
      highlightFill: 'rgba(86,204,242,1)',
      highlightStroke: 'rgba(86,204,242,1)',
      data: [6500, 5900, 8000, 9100],
    },
  ],
};

const YearlyEvolution = () => (
  <div className="card card-md">
    <span className="card-title">Evolutions annuelles</span>
    <Bar data={data} height="200" width="300" />
    <span className="card-link">Tableau détaillé</span>
  </div>
);

export default YearlyEvolution;

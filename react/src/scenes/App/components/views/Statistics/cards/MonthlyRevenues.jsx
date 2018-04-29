import React from 'react';
import { Line } from 'react-chartjs';

const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
  datasets: [
    {
      label: '2017',
      fillColor: 'rgba(86,204,242,0.2)',
      strokeColor: 'rgba(86,204,242,1)',
      pointColor: 'rgba(86,204,242,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(86,204,242,1)',
      data: [650, 590, 800, 810, 560, 550, 400],
    },
    {
      label: '2018',
      fillColor: 'rgba(84,98,117,0.2)',
      strokeColor: 'rgba(84,98,117,1)',
      pointColor: 'rgba(84,98,117,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(84,98,117,1)',
      data: [280, 480, 400, 190, 860, 270, 900],
    },
  ],
};

const MonthlyRevenuesCard = () => (
  <div className="card card-lg">
    <span className="card-title">Revenus mensuels</span>
    <Line data={data} width="400" height="175" />
    <span className="card-link">Tableau détaillé</span>
  </div>
);

export default MonthlyRevenuesCard;

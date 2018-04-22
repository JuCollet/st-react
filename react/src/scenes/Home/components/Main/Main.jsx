import React from 'react';
import './styles/styles.less';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const Main = () => (
  <main rol="main" className="main">
    <Section1 />
    <Section2 />
  </main>
);

export default Main;

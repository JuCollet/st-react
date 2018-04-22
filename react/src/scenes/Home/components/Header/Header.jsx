import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './styles/styles.less';

const Header = () => (
  <header className="header">
    <span className="header-logo">Supertime</span>
    <Navbar />
  </header>
);

export default Header;

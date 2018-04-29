import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.less';
import logo from './img/logo.svg';

const Header = () => (
  <div className="app-header">
    <Link to="/home">
      <img src={logo} className="app-header-logo" alt="Welcome to supertime" />
    </Link>
  </div>
);

export default Header;

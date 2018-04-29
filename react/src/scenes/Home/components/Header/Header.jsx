import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import logo from '../../../../img/logo.svg';
import './styles/styles.less';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userHasScrolled: false,
    };
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler() {
    let userHasScrolled;
    if (window.scrollY > 10) userHasScrolled = true;
    else userHasScrolled = false;
    this.setState({ userHasScrolled });
  }

  render() {
    return (
      <header className={`home-header ${this.state.userHasScrolled ? 'home-header-small' : ''}`}>
        <Link to="/home">
          <img src={logo} className="home-header-logo" alt="Welcome to supertime" />
        </Link>
        <Navbar />
      </header>
    );
  }
}

export default Header;

import React, { PureComponent } from 'react';
import Navbar from './components/Navbar/Navbar';
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
      <header className={`header ${this.state.userHasScrolled ? 'header-small' : ''}`}>
        <span className="header-logo">Supertime</span>
        <Navbar />
      </header>
    );
  }
}

export default Header;

import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles/styles.less';
import feature1 from '../../../../img/feature1.svg';
import feature2 from '../../../../img/feature2.svg';
import feature3 from '../../../../img/feature3.svg';
import feature4 from '../../../../img/feature4.svg';

const links = [
  {
    img: feature1,
    alt: 'feature1',
    link: 'stats',
  },
  {
    img: feature2,
    alt: 'feature2',
    link: 'calc',
  },
  {
    img: feature3,
    alt: 'feature3',
    link: 'send',
  },
  {
    img: feature4,
    alt: 'feature4',
    link: 'keep',
  },
];

const Sidebar = props => (
  <div className="app-sidebar">
    <ul className="app-sidebar-links">
      {links.map(link => (
        <NavLink to={`/app/${link.link}`} key={link.alt} >
          <li className={props.location.pathname === `/app/${link.link}` ? 'active' : ''}>
            <input type="image" src={link.img} alt={link.alt} height="25px" width="auto" />
          </li>
        </NavLink>
      ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Sidebar);


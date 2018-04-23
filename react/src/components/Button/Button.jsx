import React from 'react';
import PropTypes from 'prop-types';
import './styles/styles.less';

const Button = props => (
  <button
    className={`
      button 
      ${props.white ? 'button-white' : ''}
    `}
    onClick={props.clickHandler}
  >
    {props.title}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
  white: PropTypes.bool,
};

Button.defaultProps = {
  clickHandler: a => a,
  white: false,
};

export default Button;

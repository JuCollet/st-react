import React from 'react';
import PropTypes from 'prop-types';
import './styles/styles.less';

const Button = props => (
  <button
    className={`
      btn
      btn-${props.size}
      btn-${props.color}
    `}
    onClick={props.clickHandler}
  >
    {props.title}
  </button>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf(['blue', 'outline']),
};

Button.defaultProps = {
  clickHandler: a => a,
  size: 'md',
  color: 'blue',
};

export default Button;

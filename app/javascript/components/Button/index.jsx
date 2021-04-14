import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './styles';

const Button = ({ children, onClick, className }) => (
  <Btn
    className={className}
    onClick={onClick}
  >
    {children}
  </Btn>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;

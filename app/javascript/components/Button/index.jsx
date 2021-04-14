import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './styles';

const Button = ({
  type, children, onClick, className,
}) => (
  <Btn
    type={type}
    className={className}
    onClick={onClick}
  >
    {children}
  </Btn>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
};

export default Button;

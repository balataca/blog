import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const LocaleDate = ({ date }) => {
  const localeDate = new Date(date).toLocaleDateString([], dateOptions);

  return (
    <Container>{localeDate}</Container>
  );
};

LocaleDate.propTypes = {
  date: PropTypes.string,
};

LocaleDate.defaultProps = {
  date: new Date().toISOString(),
};

export default LocaleDate;

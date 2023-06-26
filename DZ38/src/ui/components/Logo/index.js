// Core
import React from 'react';
import PropTypes from 'prop-types';
// Engine
import { links } from '../../../engine/config/links';
// Style
import { Wrapper, Icon, Text } from './components';

function Logo(props) {
  const { color } = props;
  return (
    <Wrapper to={links.main} component="div" color={color}>
      <Icon component="div" color={color} />
      <Text component="h1">Booking</Text>
    </Wrapper>
  );
}

Logo.defaultProps = {
  color: undefined,
};
Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;

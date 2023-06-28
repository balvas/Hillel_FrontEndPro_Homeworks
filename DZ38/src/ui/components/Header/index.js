import React from 'react';
import Stack from '@mui/material/Stack';
// Core
import { links } from '../../../engine/config/links';
// Parts
import Logo from '../Logo';
import Button from '../Button';
// Style
import Wrapper from './components';

function Header() {
  return (
    <Wrapper component="header">
      <Logo />
      <Stack spacing={2} direction="row">
        <Button reactHref={links.main} variant="contained">Home</Button>
        <Button reactHref={links.about} variant="contained">About</Button>
      </Stack>
    </Wrapper>
  );
}

export default Header;

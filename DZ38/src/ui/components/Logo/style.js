// Core
import { styled } from '@mui/system';
// Parts
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  backgroundColor: 'inherit',
  color: theme.palette.primary.main,
}));

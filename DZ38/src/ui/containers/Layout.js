// Core
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { orange } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
// Parts
import Header from '../components/Header';
// Engine
import { store } from '../../engine/init/store';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container sx={{ marginTop: '20px' }}>
          <Outlet />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default Layout;

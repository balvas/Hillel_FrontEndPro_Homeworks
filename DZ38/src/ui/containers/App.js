import {
  Route, Routes,
} from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
// Engine
import { pages } from '../../engine/config/routers';
import { history } from '../../engine/init/store';
// Parts
import Layout from './Layout';

function App() {
    const test = '1';
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pages.map((route) => (
            <Route
              key={route.link}
              element={route.element}
              path={route.link}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

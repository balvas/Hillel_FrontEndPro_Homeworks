// Core

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

// Pages
import Header from './ui/component/Header';
import Footer from './ui/component/Footer';

// Engine
import Routers from './engine/configs/routers';
import ErrorBoundary from './ui/containers/ErrorBoundary';

import './index.css';



function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            {Routers.map(item => <Route key={item.path} {...item} />)}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </ErrorBoundary>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import './App.css';
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

class App extends React.Component  {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    );
  }
 
}

export default App;

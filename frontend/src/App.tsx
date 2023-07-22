import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Button from './components/Button';
import AirlineStatus from './components/AirlineStatus';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Form />
      <Button />
      <AirlineStatus />
    </div>
  );
}

export default App;
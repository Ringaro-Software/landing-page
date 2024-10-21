import { type FC } from 'react';
import './App.css';
import logo from './assets/black_logo.png';

export const App: FC = () => {
  return (
    <div className="App">
      <header>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
      </header>
    </div>
  );
};

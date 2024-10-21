import { type FC } from 'react';
import logo from '../../assets/black_logo.png';

export const LandingPage: FC = () => {
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

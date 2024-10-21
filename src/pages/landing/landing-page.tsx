import { type FC } from 'react';
import logo from '../../assets/black_logo.png';

export const LandingPage: FC = () => {
  return (
    <div>
      <header className="flex justify-center">
        <img
          src={logo}
          className="max-h-80"
          alt="logo"
        />
      </header>
    </div>
  );
};

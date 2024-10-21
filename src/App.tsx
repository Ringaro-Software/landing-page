import { type FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './config/router';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};

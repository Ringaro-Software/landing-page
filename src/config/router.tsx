import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '../pages/landing/landing-page';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

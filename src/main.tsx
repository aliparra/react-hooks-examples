import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
import { Navbar } from './components/Navbar';
import UseEffectPage from './pages/use-effect-page/UseEffectPage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const NavbarWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/', // yes, again
        element: <Home />,
      },
      {
        path: '/use-effect',
        element: <UseEffectPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

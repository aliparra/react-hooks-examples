import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import UseEffectPage from './pages/use-effect-page/UseEffectPage';
import { Navbar } from './components/molecules/navbar/Navbar';
import UseRefPage from './pages/use-ref-page/UseRefPage';
import UseLayoutEffectPage from './pages/use-layout-effect-page/UseLayoutEffectPage';
import UseMemoPage from './pages/use-memo-page/UseMemoPage';
import UseCallbackPage from './pages/use-callback-page/UseCallbackPage';
import UseReducerPage from './pages/use-reducer-page/UseReducerPage';
import UseContextPage from './pages/use-context-page/UseContextPage';

const NavbarWrapper = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/', // yes, again
        element: <HomePage />,
      },
      {
        path: '/use-effect',
        element: <UseEffectPage />,
      },
      {
        path: '/use-ref',
        element: <UseRefPage />,
      },
      {
        path: '/use-layout-effect',
        element: <UseLayoutEffectPage />,
      },
      {
        path: '/use-memo',
        element: <UseMemoPage />,
      },
      {
        path: '/use-callback',
        element: <UseCallbackPage />,
      },
      {
        path: '/use-reducer',
        element: <UseReducerPage />,
      },
      {
        path: '/use-context',
        element: <UseContextPage />,
      },
    ],
  },
]);

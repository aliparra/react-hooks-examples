import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
/**
 * The function returns a Navbar component
 * @returns A navbar with a link to the home page.
 */
export const Navbar = (): ReactElement => {
  const navbarElements = [
    { url: '/use-effect', label: 'useEffect' },
    { url: '/use-ref', label: 'useRef' },
    { url: '/use-layout-effect', label: 'useLayoutEffect' },
    { url: '/use-memo', label: 'useMemo' },
    { url: '/use-callback', label: 'useCallback' },
    { url: '/use-reducer', label: 'useReducer' },
    { url: '/use-context', label: 'useContext' },
  ];

  return (
    <div>
      <nav className="navbar__wrapper navbar-dark bg-dark">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `--active` : `--regular`)}
        >
          <div className="image__wrapper">
            <img
              src="/img/react.png"
              width="30"
              height="30"
              className="d-inline-block align-top mx-2"
              alt=""
            />
            <span>React Hooks Page</span>
          </div>
        </NavLink>

        {navbarElements.map((navElement) => {
          return (
            <NavLink
              to={navElement.url}
              className={({ isActive }) =>
                isActive ? `--active` : `--regular`
              }
            >
              {navElement.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

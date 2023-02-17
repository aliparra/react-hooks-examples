import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
/**
 * The function returns a Navbar component
 * @returns A navbar with a link to the home page.
 */
export const Navbar = (): ReactElement => {
  const navbarElements = [{ url: '/', label: '' }];

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

        <NavLink
          to="/use-effect"
          className={({ isActive }) => (isActive ? `--active` : `--regular`)}
        >
          useEffect
        </NavLink>
      </nav>
    </div>
  );
};

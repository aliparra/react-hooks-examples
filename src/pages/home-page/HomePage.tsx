import { ReactElement } from 'react';
import '../global.css';
import './home-page.css';

function HomePage(): ReactElement {
  return (
    <div className="home">
      <h1>Home page</h1>
      <section
        role="contentinfo"
        aria-label="About me"
        className="home__section"
      >
        <article className="home__article">
          <h2>About me</h2>
          <p>
            Hey there! my name is Alicia and i'm a frontend developer. Im always
            trying to learn better code practices and frameworks
          </p>
          <h3>What is this project for</h3>
          <p>
            I like learning all the time, but I'm a person who learns better
            with examples, and having scaffoldings for all helps me a lot. After
            spending hours and hours trying to set up everything to start a
            project, I realised that was unnecessary, if I can get an example I
            previously did I can start learning the new things and not worring
            too much about setting up everything.
          </p>
        </article>
      </section>
      <section
        role="contentinfo"
        aria-label="Page content"
        className="home__section"
      >
        <article className="home__article">
          <h2>Page content</h2>
          <ul>
            <li>
              New react-router-dom version routes implementation v6.4 with
              createBrowserRouter
            </li>
            <li>Basic navar using ActiveLinks</li>
            <li>Create custom hooks</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default HomePage;

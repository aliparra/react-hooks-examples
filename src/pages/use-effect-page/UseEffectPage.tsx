import { ReactElement } from 'react';
import { FormWithCustomHook } from '../../components/molecules/form-with-custom-hooks/FormWithCustomHook';
import '../global.css';
import './use-effect-page.css';
import { BreakingBadQuotes } from '../../components/molecules/breaking-bad-quotes/BreakingBadQuotes';

function UseEffectPage(): ReactElement {
  return (
    <div className="use-effect-page">
      <h1>UseEffectPage page</h1>
      <hr />
      <section>
        <h2>Custom hooks</h2>
        <article className="use-effect-page__custom-hook-form__article">
          <p>
            Creates a basic form using a reusable custom hook called useForm.
          </p>
          <div className="use-effect-page__custom-hook-form">
            <h2>Form with a custom hook</h2>
            <FormWithCustomHook />
          </div>
        </article>
        <hr />
        <article className="use-effect-page__custom-hook-form__article">
          <p>
            Display a breaking bad quote obtained from a public api using custom
            hook useFetch
          </p>
          <div className="use-effect-page__custom-hook-form">
            <h2>Breaking bad quotes</h2>
            <BreakingBadQuotes id={1} />
          </div>
        </article>
      </section>

      <hr />
    </div>
  );
}

export default UseEffectPage;

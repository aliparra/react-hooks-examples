import { ReactElement } from 'react';
import { FormWithCustomHook } from '../../components/useEffect/FormWithCustomHook';
import '../global.css';
import './use-effect-page.css';

function UseEffectPage(): ReactElement {
  return (
    <div className="use-effect-page">
      <h1>UseEffectPage page</h1>
      <hr />
      <article className="use-effect-page__custom-hook-form__article">
        <p>Creates a basic form using a reusable custom hook called useForm.</p>
        <div className="use-effect-page__custom-hook-form">
          <h2>Form with a custom hook</h2>
          <FormWithCustomHook />
        </div>
      </article>

      <hr />
    </div>
  );
}

export default UseEffectPage;

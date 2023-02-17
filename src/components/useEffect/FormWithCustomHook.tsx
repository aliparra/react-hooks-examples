import { ReactElement } from 'react';
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = (): ReactElement => {
  const { formState, onInputChange, onResetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });


  const {name, email, password} = formState

  return (
    <div>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="name"
        name="name"
        value={name}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@example.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
    </div>
  );
};

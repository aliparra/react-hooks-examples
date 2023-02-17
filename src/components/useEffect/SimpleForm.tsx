import { ReactElement, useState } from 'react';

// Declare state for each form value
export const SimpleForm = (): ReactElement => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Set a new state when the form value changes
  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      //Only change the formState value that changes. 
      ...formState,
      [name]: value,
    });
  };

  const { name, email, password } = formState;

  return (
    <div>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="name"
        name="email"
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
        name="email"
        value={password}
        onChange={onInputChange}
      />
    </div>
  );
};

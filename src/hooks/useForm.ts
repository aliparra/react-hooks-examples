import React from 'react';
import { useState } from 'react';

// It returns an customHook that manage forms state

type StringObject = { [key: string]: string };

export const useForm = (initialForm: StringObject) => {
  //Set form state (The initialForm could be {name:'', email: ''})
  const [formState, setFormState] = useState(initialForm);

  // Set the new state into input value when there is a change
  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return { formState, onInputChange, onResetForm };
};

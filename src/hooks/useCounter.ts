import { useState } from 'react';

/* It returns an customHook that manage a counter and provide increment
 decrement and restore methods.*/

export const useCounter = (startValue: number = 0) => {
  //Set counter state (The initial state can be changed)
  const [counter, setcounter] = useState(startValue);

  // Increases counter value in the number passed as an argument
  const increment = (value = 1) => {
    setcounter(counter + value);
  };

  // Decreases counter value in the number passed as an argument
  const decrement = (value = 1) => {
    counter > 0 && setcounter(counter - value);
  };

  // Set the counter value to the start value
  const restore = () => {
    setcounter(startValue);
  };

  return { counter, increment, decrement, restore };
};

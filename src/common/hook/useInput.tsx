import React, { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.currentTarget.value);
  };

  return { inputValue, onChangeInput };
};

export default useInput;

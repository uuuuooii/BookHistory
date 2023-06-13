import React, { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return { inputValue, onChangeInput };
};

export default useInput;

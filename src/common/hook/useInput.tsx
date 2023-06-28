import React, { useState } from 'react';

const useInput = (defaultValue?: string) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue ?? '');

  const onChangeInput = (e: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.currentTarget.value);
  };

  return { inputValue, onChangeInput };
};

export default useInput;

import { ChangeEvent, useState } from 'react';

const useInput = (defaultValue?: string) => {
  const [inputValue, setInputValue] = useState<string>(defaultValue ?? '');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const reset = () => {
    setInputValue('');
  };

  return { inputValue, onChangeInput, reset };
};

export default useInput;

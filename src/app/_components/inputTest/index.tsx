'use client';

import styled from '@emotion/styled';
import inputSize from './data';

type InputStyleProps = {
  size?: 'small' | 'medium' | 'large';
}

const InputStyle = styled.input<InputStyleProps>`
  width: 100%;
  ${({ size }) => size && inputSize[size]};
  border-bottom: 1px solid #E0E0E0;
`;

interface InputProps extends InputStyleProps {
  placeholder: string;
  value?: string;
}

const Input = ({ placeholder, value, ...styleProps }: InputProps) => {
  return (
    <InputStyle
      {...styleProps}
      placeholder={placeholder}
      value={value}
    />

  );
};

export default Input;

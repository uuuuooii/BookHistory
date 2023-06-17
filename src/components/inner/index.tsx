import React, { ReactNode } from 'react';
import Wrapper from './style';

interface InnerProps {
  children: ReactNode;
}

const Inner = ({ children }: InnerProps) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Inner;

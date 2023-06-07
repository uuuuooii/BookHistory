import React, { ReactNode } from 'react';
import { Wrapper } from './style';

interface InnerProps {
  children: ReactNode;
}

function Inner({ children }: InnerProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default Inner;

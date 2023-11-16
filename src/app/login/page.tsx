'use client';

import { signIn } from 'next-auth/react';
import React from 'react';
import Wrapper from './style';

const Login = () => {
  return (
    <Wrapper>
      <button type="button" onClick={() => signIn('google')}>
        Login with Google
      </button>
    </Wrapper>
  );
};

export default Login;

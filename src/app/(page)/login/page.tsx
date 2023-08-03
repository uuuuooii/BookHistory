'use client';

import { signIn } from 'next-auth/react';
import React from 'react';
import * as S from './style';

const Login = () => {
  return (
    <S.Wrapper>
      <button type="button" onClick={() => signIn('google')}>
        Login with Google
      </button>
    </S.Wrapper>
  );
};

export default Login;

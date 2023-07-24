'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Inner from '@/app/_components/inner';
import * as S from './style';

const Register = () => {
  const [isErr, setIsErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      res.status === 201 && router.push('/login?succes=Account has been created');
    } catch (err) {
      setIsErr(true);
    }
  };

  return (
    <Inner>
      <S.Wrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="username"
            required
          />
          <S.Input
            type="email"
            placeholder="email"
            required
          />
          <S.Input
            type="password"
            placeholder="password"
            required
          />
          <S.Button type="button">Register</S.Button>
          <S.Link>
            {isErr && 'Something went wrong!'}
            <Link href="/login">Login with an existing account</Link>
          </S.Link>
        </S.Form>
      </S.Wrapper>
    </Inner>
  );
};

export default Register;

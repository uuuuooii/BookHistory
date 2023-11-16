'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Inner from '@/components/inner';
import postRegister from '@/lib/api/register';
import * as S from './style';

const Register = () => {
  const [isErr, setIsErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (e.currentTarget[0] as HTMLInputElement).value;
    const email = (e.currentTarget[1] as HTMLInputElement).value;
    const password = (e.currentTarget[2] as HTMLInputElement).value;

    try {
      const data = {
        name,
        email,
        password
      };

      const res = await postRegister(data);

      if (res.status === 201) {
        router.push('/login?success=Account has been created');
      }
    } catch (err) {
      setIsErr(true);
      console.log(err);
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
          <S.Button type="submit">Register</S.Button>
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

'use client';

import styled from '@emotion/styled';

export const Form = styled.form`
  padding-top: 100px;
`;

export const Wapper = styled.div`
  display: flex;
  gap: 200px;
`;

export const InputWrapper = styled.article`
  display: grid;
  gap: 20px;
  width: 200px;
  height: 30px;
`;

export const Input = styled.input<{ isContent?: boolean }>`
  width: 300px;
  height: ${({ isContent }) => (isContent ? '150px' : '40px')};
  padding-left: 10px;
`;

export const Button = styled.button`
  height: 40px;
  background: aquamarine;
`;

'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.header<{ isShow: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 68px;
  padding: 0 56px;
  background: ${({ theme, isShow }) =>
    isShow
      ? theme.colors.neutral.black
      : `linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  )`};
  z-index: 10;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

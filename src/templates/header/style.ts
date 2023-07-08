'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.header<{ isShow: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 68px;
  padding: 0 56px;
  background: ${({ isShow }) =>
    isShow &&
    `background: transparent;
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,.1);
    backdrop-filter: saturate(180%) blur(16px);
    `};
  z-index: 10;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Title = styled.p<{ isShow: boolean }>`
  color: ${({ isShow, theme }) =>
    isShow ? theme.colors.neutral.black : theme.colors.neutral.white};
`;

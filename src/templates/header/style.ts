'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 68px;
  padding: 0 56px;
  background: ${({ theme }) => theme.colors.neutral.black};
  z-index: 10;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const NavItme = styled.button`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.header`
  padding: 0 56px;
  background: ${({ theme }) => theme.colors.neutral.black};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const NavItme = styled.button`
  color: ${({ theme }) => theme.colors.neutral.white};
`;

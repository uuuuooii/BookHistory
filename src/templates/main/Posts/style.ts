'use client';

import styled from '@emotion/styled';

export const TitleContent = styled.div`
  display: grid;
  gap: 10px;
  padding: 30px 0;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 22px;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 14px;
`;

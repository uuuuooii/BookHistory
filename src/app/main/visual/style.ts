'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 500px;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0,
      hsla(0, 0%, 8%, 0.15) 40%,
      hsla(0, 0%, 8%, 0.35) 49%,
      hsla(0, 0%, 8%, 0.58) 54%,
      #141414 68%,
      #141414
    ),
    url('/images/background1.webp');
  background-position: 50%;
  background-size: cover;
`;

export const TitleContent = styled.div`
  position: absolute;
  display: grid;
  position: absolute;
  top: 211px;
  left: 57px;
  gap: 10px;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 1.75rem;
  font-weight: 700;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 0.875rem;
`;

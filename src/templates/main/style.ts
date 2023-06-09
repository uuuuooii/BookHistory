'use client';

import styled from '@emotion/styled';

export const Picture = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  background-position: 50%;
  background-size: cover;

  img {
    object-fit: cover;
    /* background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 8%, 0) 0,
      hsla(0, 0%, 8%, 0.15) 15%,
      hsla(0, 0%, 8%, 0.35) 29%,
      hsla(0, 0%, 8%, 0.58) 44%,
      #141414 68%,
      #141414
    ); */
  }
`;

export const TitleContent = styled.div`
  display: grid;
  gap: 10px;
  padding-top: 30px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 22px;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 14px;
`;

'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  width: 300px;
  height: 350px;
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 10px;
`;

export const ImageWrapper = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  img {
    border-radius: 10px 10px 0 0;
  }
`;

export const Contents = styled.div`
  display: grid;
  gap: 5px;
  padding: 15px;
`;

export const ItemTitle = styled.a`
  font-size: 18px;
  font-weight: 500;
`;

export const Date = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colors.gray.gray02};
`;

export const Day = styled.p`
  color: ${({ theme }) => theme.colors.gray.gray02};
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray.gray01};
  font-size: 13px;
`;

'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  width: 300px;
  height: 350px;
  background: ${({ theme }) => theme.colors.neutral.white};
  margin-top: 20px;
  border-radius: 10px;
`;

export const Item = styled.li`
  display: grid;
  gap: 10px;
`;

export const ImageWrapper = styled.picture`
  position: relative;
  width: 100%;
  height: 100px;
  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const Contents = styled.div`
  padding: 20px;
`;

export const ItemTitle = styled.a`
  font-size: 18px;
  font-weight: 500;
`;

export const Date = styled.div`
  display: flex;
  gap: 10px;
`;

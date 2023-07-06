'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  border-radius: 10px;
`;

export const PostsItem = styled.li`
  width: 300px;
  height: 350px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.neutral.white};
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 150px;
  img {
    border-radius: 10px 10px 0 0;
    object-fit: cover;
  }

  &:hover {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0) 35.41%,
        rgba(0, 0, 0, 0) 64.59%,
        rgba(0, 0, 0, 0.6) 100%
      );
      z-index: 1;
    }
    div {
      display: flex;
      position: absolute;
      gap: 10px;
    }
  }
`;

export const IconWrapper = styled.div`
  display: none;
`;

export const Icon = styled.picture`
  display: block;
  gap: 10px;
  position: relative;
  width: 20px;
  height: 20px;
  top: 110px;
  left: 233px;
  z-index: 1;
  cursor: pointer;
`;

export const Contents = styled.div`
  position: relative;
  display: grid;
  gap: 5px;
  padding: 15px;
  cursor: pointer;
`;

export const ItemTitle = styled.a`
  font-size: 18px;
  font-weight: 500;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray.gray01};
  font-size: 13px;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Data = styled.p`
  position: absolute;
  top: 169px;
  left: 211px;
  color: ${({ theme }) => theme.colors.gray.gray01};
  font-size: 13px;
`;

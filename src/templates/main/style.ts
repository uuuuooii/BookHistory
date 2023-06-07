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
  }
`;

export const Wrapper = styled.section``;

export const Title = styled.div`
  padding-top: 30px;
`;

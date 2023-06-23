'use client';

import styled from '@emotion/styled';

const Visual = styled.div`
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
    url('/images/background.jpeg');
  background-position: 50%;
  background-size: cover;
`;
export default Visual;

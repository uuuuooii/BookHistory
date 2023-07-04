import styled from '@emotion/styled';

export const Wrapper = styled.main`
  padding-top: 100px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Picture = styled.picture`
  display: block;
  position: relative;
  width: 500px;
  height: 300px;
  img {
    object-fit: cover;
  }
`;

export const Title = styled.h4`
  color: white;
`;

export const Content = styled.p`
  color: white;
`;

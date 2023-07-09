import styled from '@emotion/styled';

export const Wrapper = styled.article`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-top: 80px;
`;

export const Picture = styled.picture`
  display: block;
  position: relative;
  width: 100%;
  height: 300px;
  img {
    object-fit: cover;
  }
`;

export const Title = styled.h4`
  font-size: 1.563rem;
  color: ${({ theme }) => theme.colors.neutral.white};
`;

export const Data = styled.p`
  padding-bottom: 20px;
  color: #999;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral.white};
`;
export const Content = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  white-space: pre-line;
`;

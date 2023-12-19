import styled from '@emotion/styled';

export const PostsItem = styled.li`
  display: flex;
  width: 394px;
  height: 298px;
  border-radius: 10px;
  background: white;

  @media screen and (max-width: 899px) {
    width: 350px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: block;
  min-width: 173px;
  height: 298px;
  img {
    border-radius: 10px 0 0 10px;
    object-fit: cover;
  }
  @media screen and (max-width: 599px) {
    min-width: 136px;
  }
  &:hover {
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
  top: 11px;
  left: 110px;
  z-index: 1;
  cursor: pointer;
`;

export const Contents = styled.div`
  position: relative;
  padding: 15px;
  cursor: pointer;
`;

export const ItemTitle = styled.h4`
  color: ${({ theme }) => theme.colors.gray.gray02};
  font-size: 1.125rem;
  font-weight: 500;
`;

export const Count = styled.span`
  color: ${({ theme }) => theme.colors.gray.gray01};
`;

export const Star = styled.div`
  padding: 10px 0;
`;

export const Desc = styled.p`
  color: ${({ theme }) => theme.colors.gray.gray01};
  font-size: 0.813rem;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Data = styled.p`
  position: absolute;
  top: 263px;
  left: 18px;
  color: ${({ theme }) => theme.colors.gray.gray01};
  font-size: 0.813rem;
`;

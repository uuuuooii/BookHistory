import styled from '@emotion/styled';

export const InputWrapper = styled.article`
  display: grid;
  gap: 20px;
  height: 30px;
`;

export const Input = styled.textarea<{ isContent?: boolean }>`
  width: 300px;
  height: ${({ isContent }) => (isContent ? '150px' : '40px')};
  padding-left: 10px;
`;

export const Button = styled.button`
  height: 40px;
  background: aquamarine;
`;

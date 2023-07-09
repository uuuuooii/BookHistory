import styled from '@emotion/styled';

export const InputWrapper = styled.article`
  display: grid;
  position: fixed;
  width: 500px;
  height: 500px;
  right: 50px;
  background: black;
  gap: 20px;
  height: 30px;
`;

export const Input = styled.textarea<{ isContent?: boolean }>`
  width: 500px;
  height: ${({ isContent }) => (isContent ? '300px' : '40px')};
  padding-left: 10px;
`;

export const Button = styled.button`
  height: 40px;
  background: aquamarine;
`;

import styled from '@emotion/styled';

export const InputWrapper = styled.article`
  display: grid;
  position: fixed;
  width: 500px;
  height: 500px;
  right: 100px;
  background: black;
  gap: 20px;
  height: 30px;
`;

export const Input = styled.textarea<{ isContent?: boolean }>`
  width: 500px;
  height: ${({ isContent }) => (isContent ? '300px' : '40px')};
  padding-left: 10px;
`;

export const Button = styled.button<{ isReset?: boolean }>`
  width: 100%;
  height: 40px;
  background: ${({ isReset }) => (isReset ? '#ff6878' : 'aquamarine')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

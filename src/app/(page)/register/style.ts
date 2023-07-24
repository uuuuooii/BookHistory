import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
  width: 300px;
`;

export const Input = styled.input`
  padding: 20px;
  background: transparent;
  border: 2px solid #bbb;
  border-radius: 5px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-weight: bold;
`;

export const Button = styled.button`
  width: 300px;
  padding: 20px;
  background: #53c28b;
  border-radius: 5px;
  font-weight: bold;
  color: #eee;
`;

export const Link = styled.div`
  a {
    color: ${({ theme }) => theme.colors.neutral.white};
  }
`;

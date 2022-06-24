import styled from "styled-components";

export const Input = styled.input`
  height: 40px;
  padding: 5px 10px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.55);
  transition: border-bottom 0.35s;
  max-width: 400px;
  min-width: 250px;
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  &:focus {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
    outline: none;
  }
`;

export default Input;

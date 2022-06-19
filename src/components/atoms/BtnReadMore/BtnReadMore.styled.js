import styled from "styled-components";

export const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  border: 2px solid;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  align-self: center;
  margin: 10px auto 30px;
  border-radius: 4px;
  transition: color 0.15s, background-color 0.15s;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: transparent;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }

  @media (min-width: 768px) {
    align-self: flex-end;
    margin: 10px 50px 25px 0;
  }
`;

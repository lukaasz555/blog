import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.black};
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  align-self: center;
  border-radius: 4px;
  transition: color 0.35s, transform 0.2s;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.35);
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s;
    z-index: -1;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 768px) {
    align-self: flex-end;
    margin: 10px 0 40px;
  }
`;

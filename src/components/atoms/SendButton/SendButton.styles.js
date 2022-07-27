import styled from "styled-components";

export const StyledSendBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s;

  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  &:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  &:hover span {
    transform: translateX(5em);
  }

  &:active {
    transform: scale(0.95);
  }
`;

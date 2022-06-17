import styled from "styled-components";
export const StyledButton = styled.button`
  height: 20px;
  width: 20px;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  background: transparent;
  border: none;
  box-sizing: content-box;

  div {
    width: 30px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    transition: transform 0.25s;
    position: absolute;
    transform-origin: center;

    &:nth-child(1) {
      top: ${({ isOpen }) => (isOpen ? "50%" : "0")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-50%) rotate(-45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
      transition: opacity 0.2s;
    }

    &:nth-child(3) {
      top: ${({ isOpen }) => (isOpen ? "50%" : "100%")};
      transform: ${({ isOpen }) =>
        isOpen ? "translateY(-50%) rotate(45deg)" : "rotate(0)"};
    }
  }
`;

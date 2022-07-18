import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;

  h1 {
    width: 100%;
    text-align: center;
  }
  button {
    padding: 0.5em 1em;
    color: ${({ theme }) => theme.colors.blue};
    border: 1px solid;
    border-radius: 16px;
    background: transparent;
    margin: 0.5em 1em;
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
      border-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

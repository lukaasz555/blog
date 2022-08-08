import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  z-index: 0;

  @media (min-width: 960px) {
    width: 560px;
  }

  .errorInfo {
    color: rgba(255, 0, 0, 0.7);
    font-weight: bold;
  }

  .sendInfo {
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 2em;
  }
`;

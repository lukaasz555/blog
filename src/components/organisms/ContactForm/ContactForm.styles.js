import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  z-index: 0;

  @media (min-width: 960px) {
    width: 560px;
  }
`;

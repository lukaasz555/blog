import styled from "styled-components";

export const Wrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.8);
  width: 90%;
  margin: 0 auto;
`;

export const StyledTop = styled.div`
  h1 {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledContent = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin: 0 0 2em;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
  }
`;

export const StyledBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 5em 0 2em;

  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
  }

  Button {
    margin: 0;
  }
`;

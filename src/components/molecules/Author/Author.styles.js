import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  /*   border-top: 1px solid rgba(0, 0, 0, 0.8); */
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  padding: 0 1em;
  margin: 1em 0;
  border-radius: 6px;

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin: 1em 1em 1em 0;
    transform: scale(1);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Describe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1em 0;
  h3,
  p {
    margin: 0;
  }
`;

export const About = styled.div`
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

export const Socials = styled.div`
  padding-top: 1em;

  a {
    color: rgba(0, 0, 0, 0.4);
    font-size: ${({ theme }) => theme.fontSize.l};
    transition: color 0.2s;

    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }

  a {
    margin: 0 0.5em;
  }

  a:first-child {
    margin-left: 0;
  }
`;

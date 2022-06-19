import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 15px;

  h1 {
    font-weight: 400;
    font-size: 28px;
    margin-bottom: 7px;
    transition: font-size 0.35s;
  }

  h2 {
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
    transition: font-size 0.35s;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

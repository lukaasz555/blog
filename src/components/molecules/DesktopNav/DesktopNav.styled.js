import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: 0 auto 30px;
  padding-bottom: 30px;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 10px;
  position: relative;
  font-weight: 300;
  transition: all 0.3s;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0;
    visibility: none;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover::before {
    visibility: visible;
    height: 100%;
    opacity: 1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 1px;
    width: 60%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 0;
    transition: opacity 0.5s, visibility 0.5s;
    visibility: none;
  }

  &.active > span {
    visibility: visible;
    opacity: 1;
  }
`;

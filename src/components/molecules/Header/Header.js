import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Logo from "components/atoms/Logo/Logo";
import HamburgerButton from "components/atoms/HamburgerButton/HamburgerButton";

const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Header = ({ isOpen, setOpen }) => (
  <StyledHeader>
    <Logo />
    <HamburgerButton isOpen={isOpen} setOpen={setOpen} />
  </StyledHeader>
);

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Header;

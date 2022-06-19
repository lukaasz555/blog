import React from "react";
import PropTypes from "prop-types";
import Logo from "components/atoms/Logo/Logo";
import HamburgerButton from "components/atoms/HamburgerButton/HamburgerButton";
import { StyledHeader } from "./Header.styled";

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

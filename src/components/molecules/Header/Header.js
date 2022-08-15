import React from "react";
import Logo from "components/atoms/Logo/Logo";
import HamburgerButton from "components/atoms/HamburgerButton/HamburgerButton";
import { StyledHeader } from "./Header.styles";

const Header = () => (
  <StyledHeader>
    <Logo />
    <HamburgerButton />
  </StyledHeader>
);

export default Header;

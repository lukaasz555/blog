import React, { useContext } from "react";
import { StyledButton } from "./HamburgerButton.styles";
import { NavContext } from "views/Root/Root";

const HamburgerButton = () => {
  const context = useContext(NavContext);
  return (
    <>
      <StyledButton isOpen={context.isOpen} onClick={context.toggleMobileNav}>
        <div></div>
        <div></div>
        <div></div>
      </StyledButton>
    </>
  );
};

export default HamburgerButton;

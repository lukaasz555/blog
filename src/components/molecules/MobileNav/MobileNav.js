import React, { useContext } from "react";
import {
  Wrapper,
  StyledLink,
} from "components/molecules/MobileNav/MobileNav.styles";
import { NavContext } from "views/Root/Root";

const MobileNav = () => {
  const context = useContext(NavContext);

  return (
    <Wrapper isOpen={context.isOpen}>
      <StyledLink to="/" onClick={context.toggleMobileNav}>
        blog<span></span>
      </StyledLink>
      <StyledLink to="/about" onClick={context.toggleMobileNav}>
        about<span></span>
      </StyledLink>
      <StyledLink to="/contact" onClick={context.toggleMobileNav}>
        contact<span></span>
      </StyledLink>
    </Wrapper>
  );
};

export default MobileNav;

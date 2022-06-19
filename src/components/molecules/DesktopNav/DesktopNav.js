import React from "react";
import { Wrapper, StyledLink } from "./DesktopNav.styled";

const DesktopNav = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        blog<span></span>
      </StyledLink>
      <StyledLink to="/about">
        about<span></span>
      </StyledLink>
      <StyledLink to="/contact">
        contact<span></span>
      </StyledLink>
    </Wrapper>
  );
};

export default DesktopNav;

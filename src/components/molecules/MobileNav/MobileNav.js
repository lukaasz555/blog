import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  StyledLink,
} from "components/molecules/MobileNav/MobileNav.styles";

const MobileNav = ({ isOpen, onClick }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <StyledLink to="/" onClick={onClick}>
        blog<span></span>
      </StyledLink>
      <StyledLink to="/about" onClick={onClick}>
        about<span></span>
      </StyledLink>
      <StyledLink to="/contact" onClick={onClick}>
        contact<span></span>
      </StyledLink>
    </Wrapper>
  );
};

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default MobileNav;

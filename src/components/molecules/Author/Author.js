import React from "react";
import img from "img/man.jpg";
import { NavLink } from "react-router-dom";
import { Wrapper, Describe, About } from "./Author.styles";
import Socials from "components/atoms/Socials/Socials";

const Author = () => {
  return (
    <Wrapper>
      <NavLink to="/about">
        <img src={img} alt="post author" />
      </NavLink>

      <Describe>
        <About>
          <h3>John Doe</h3>
          <p>blog author</p>
        </About>
        <Socials />
      </Describe>
    </Wrapper>
  );
};

export default Author;

import React from "react";
import img from "img/man.jpg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Wrapper, Describe, About, Socials } from "./Author.styles";

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
        <Socials>
          <a href="https://www.linkedin.com/in/%C5%82ukasz-zegar/">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a href="https://twitter.com/djuk_77">
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a href="https://instagram.com/lukaasz555">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Socials>
      </Describe>
    </Wrapper>
  );
};

export default Author;

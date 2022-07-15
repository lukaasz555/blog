import React from "react";
import styled from "styled-components";
import img from "img/man.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  display: flex;
  /*   border-top: 1px solid rgba(0, 0, 0, 0.8); */
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  padding: 0 1em;
  margin: 1em 0;
  border-radius: 6px;

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin: 1em 1em 1em 0;
    transform: scale(1);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Describe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 1em 0;
  h3,
  p {
    margin: 0;
  }
`;

const About = styled.div`
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const Socials = styled.div`
  padding-top: 1em;

  a {
    color: rgba(0, 0, 0, 0.4);
    font-size: ${({ theme }) => theme.fontSize.l};
    transition: color 0.2s;

    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }

  a {
    margin: 0 0.5em;
  }

  a:first-child {
    margin-left: 0;
  }
`;

const Author = () => {
  return (
    <Wrapper>
      <a href="/about">
        <img src={img} alt="post author" />
      </a>

      <Describe>
        <About>
          <h3>John Doe</h3>
          <p>autor bloga, człowiek renesansu, piwosz:D</p>
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

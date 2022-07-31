import React from "react";
import { Wrapper } from "./About.styles";
import picture from "../../img/man.jpg";
import Socials from "components/atoms/Socials/Socials";

const About = () => {
  return (
    <Wrapper>
      <img src={picture} alt="" />
      <div>
        <h3>I am John Doe</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          totam hic molestiae atque ipsum odio quaerat deleniti odit tempore
          culpa dolores magnam! Expedita omnis nisi atque suscipit aut,
          molestiae voluptate.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ratione
          error minima modi repellendus delectus adipisci necessitatibus
          dolores, quis cumque! Nesciunt provident iusto perspiciatis voluptatum
          illo sit minus repellendus aspernatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Itaque atque voluptatibus mollitia
          quibusdam illo error non est optio! Vel voluptatibus voluptatem, atque
          cumque nulla cupiditate velit inventore beatae eum? Maiores.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem aperiam
          cupiditate reprehenderit veritatis hic, consectetur consequuntur, aut
          obcaecati temporibus, id molestias consequatur optio dolore adipisci
          eum corrupti veniam illum ad!
        </p>
      </div>
      <Socials />
    </Wrapper>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import img from "img/man.jpg";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  img {
    height: 100%;
    width: 300px;
    float: left;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
  }

  img,
  h3 {
    margin-top: 20px;
  }

  div {
    width: 80%;
  }

  @media (min-width: 768px) {
    div {
      flex-basis: 50%;
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <img src={img} alt="John Doe - blog author" />
      <div>
        <h3>I am John Doe</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, odio
          temporibus sunt impedit, reiciendis ea numquam quae eveniet doloribus
          ratione ipsam eum nisi fuga accusamus reprehenderit, odit facilis
          ullam beatae. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Labore perspiciatis, consectetur doloribus, dicta quaerat,
          voluptates explicabo nulla dolores quidem repudiandae repellendus
          eveniet numquam?
        </p>
        <p>
          Placeat maxime ratione rerum. Similique, fuga labore. Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Autem iusto recusandae ex
          eum, quod ipsam aliquam adipisci porro soluta, quis animi sapiente
          corporis laborum alias labore saepe! Sit, consequuntur a! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Eius ullam sed rerum
          fugiat vel cupiditate ab vero maiores. Hic debitis eos officia ipsum
          nulla rerum sequi non dolorem suscipit libero.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo officiis
          iste minima autem, maiores, officia repellendus eveniet commodi
          expedita voluptatibus in qui quas voluptate, hic quidem non placeat
          perferendis nostrum. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur optio molestiae vitae? Fuga corporis hic
          laboriosam pariatur ad voluptatem eos nostrum. Incidunt dicta fuga
          debitis assumenda laudantium fugiat consectetur.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          minima culpa rerum ipsum obcaecati quibusdam nisi aperiam voluptas
          adipisci cupiditate doloremque, eligendi eum enim fuga, quod incidunt
          odit consectetur dolorum.
        </p>
      </div>
    </Wrapper>
  );
};

export default About;

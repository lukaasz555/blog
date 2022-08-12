import React, { useEffect, useState } from "react";
import { Wrapper } from "./About.styles";
import picture from "../../img/man.jpg";
import Socials from "components/atoms/Socials/Socials";
import axios from "axios";
import Loader from "components/atoms/Loader/Loader";

const URL = "https://graphql.datocms.com/";
const query = `{
allAbouts {
  header
  part1
  part2
  part3
  linked
  twitter
  ig
  adminImg {
    id
    url
  }
}}
`;

const About = () => {
  const [author, setAuthor] = useState({
    header: "",
    part1: "",
    part2: "",
    part3: "",
    img: "",
    linked: "",
    twitter: "",
    ig: "",
  });

  useEffect(() => {
    axios
      .post(
        URL,
        { query },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        const author = data.allAbouts;
        setAuthor({
          header: author[0].header,
          part1: author[0].part1,
          part2: author[0].part2,
          part3: author[0].part3,
          linked: author[0].linked,
          twitter: author[0].twitter,
          ig: author[0].ig,
          img: author[0].adminImg.url,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {author.header === "" ? (
        <Loader />
      ) : (
        <Wrapper>
          <img src={author.img} alt={author.header} />

          <div>
            <h3>{author.header}</h3>
            <p>{author.part1}</p>
            <p>{author.part2}</p>
            <p>{author.part3}</p>
          </div>
          <Socials
            linked={author.linked}
            twitter={author.twitter}
            insta={author.ig}
          />
        </Wrapper>
      )}
    </>
  );
};

export default About;

import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  width: 100%;
  border: 1px solid #fff;
  display: grid;
  grid-template-columns: 50px 50px 1fr 1fr 1fr;
  justify-content: space-between;
  row-gap: 1rem;

  img {
    margin: 0 1rem;
    width: 30px;
    height: 30px;
  }
`;

const Id = styled.div``;

const Img = styled.img``;

const Title = styled.div``;

const AirDate = styled.div``;

const EpisodeInfo = ({ id, title, airDate }) => {
  const link = `https://breakingbad.fandom.com/wiki/${title}`;

  return (
    <Wrapper>
      <Id>{id}</Id>
      <Title>{title}</Title>
      <AirDate>{airDate}</AirDate>
      <a href={link}>Link</a>
    </Wrapper>
  );
};

export default EpisodeInfo;

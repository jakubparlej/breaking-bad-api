import React from "react";
import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";
import { FiExternalLink } from "react-icons/fi";

const Col = styled.div`
  color: ${theme.color.white};
`;

const Link = styled.a`
  text-align: right;
  color: ${theme.color.white};
`;

const Row = styled.li`
  width: 100%;
  display: grid;
  padding: 1rem;
  font-size: 1.25rem;
  grid-template-columns: 50px 50% 20% 1fr;
  row-gap: 1rem;
  border-radius: 3px;

  :hover {
    background: rgba(255, 255, 255, 0.1);

    ${Col},${Link} {
      color: ${theme.color.lightGreen};
    }
  }

  img {
    margin: 0 1rem;
    width: 30px;
    height: 30px;
  }
`;

const EpisodeInfo = ({ id, title, airDate }) => {
  const link = `https://breakingbad.fandom.com/wiki/${title}`;

  return (
    <Row>
      <Col>{id}</Col>
      <Col>{title}</Col>
      <Col>{airDate}</Col>
      <Link href={link}>
        <FiExternalLink />
      </Link>
    </Row>
  );
};

export default EpisodeInfo;

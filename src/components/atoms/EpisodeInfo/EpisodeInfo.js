import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { Row, Col, Link } from "./EpisodeInfo.styles";

const EpisodeInfo = ({ id, title, airDate }) => {
  const link = `https://breakingbad.fandom.com/wiki/${title}`;

  return (
    <Row href={link}>
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

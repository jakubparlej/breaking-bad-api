import React from "react";
import {
  Wrapper,
  Img,
  Info,
  Table,
  Col,
  Nickname,
  Quote,
} from "./Character.styles";

const Character = ({ char }) => {
  return (
    <Wrapper>
      <Img>
        <img src={char.img} alt={char.name} />
      </Img>
      <Info>
        <Nickname>{char.nickname}</Nickname>
        <h1>{char.name}</h1>
        <Quote>
          <div>Random quote:</div>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            minima ut adipisci, nulla eaque ab tempora sint aspernatur corrupti
            obcaecati dolorem nihil. Exercitationem sint, qui similique
            obcaecati quae repellendus quos."
          </p>
        </Quote>

        <Table>
          <Col>
            <span>Birthday: </span>
            <span>{char.birthday}</span>
          </Col>
          <Col>
            <span>Status: </span>
            <span>{char.status}</span>
          </Col>
          <Col>
            <span>Occupation: </span>
            {char.occupation.map((item, index) => {
              return <span key={index}>- {item}</span>;
            })}
          </Col>
          <Col>
            <span>Apperance in season: </span>
            <span>{char.appearance.join(", ")}</span>
          </Col>
          <Col>
            <span>Portrayed: </span>
            <span>{char.portrayed}</span>
          </Col>
        </Table>
      </Info>
    </Wrapper>
  );
};

export default Character;

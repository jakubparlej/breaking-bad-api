import React, { useContext } from "react";
import { DataContext } from "../components/providers/DataProvider";

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
  const { quotes } = useContext(DataContext);

  let charQuotes = [];

  quotes.map((item) => {
    return item.author.includes(`${char.name}`) ? charQuotes.push(item) : null;
  });

  return (
    <Wrapper>
      <Img>
        <img src={char.img} alt={char.name} />
      </Img>
      <Info>
        <Nickname>{char.nickname}</Nickname>
        <h1>{char.name}</h1>

        <Quote>
          {charQuotes.length > 0 ? (
            <>
              <div>Random quote:</div>
              <p>
                {
                  charQuotes[Math.floor(Math.random() * charQuotes.length)]
                    .quote
                }
              </p>
            </>
          ) : (
            ""
          )}
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

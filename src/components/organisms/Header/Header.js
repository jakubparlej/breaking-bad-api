import React from "react";
import background from "../../../assets/images/background1.jpg";
import { Background, Content, Genres, Description } from "./Header.styles";

const Header = ({ title, genres, desc }) => {
  return (
    <>
      <Background>
        <img src={background} alt="" />
      </Background>
      <Content>
        <h1>{title}</h1>
        {genres ? (
          <Genres>
            <li>Crime</li>
            <li>Drama</li>
            <li>Thriller</li>
          </Genres>
        ) : null}
        {desc ? (
          <Description>
            A high school chemistry teacher diagnosed with inoperable lung
            cancer turns to manufacturing and selling methamphetamine in order
            to secure his family's future.
          </Description>
        ) : null}
      </Content>
    </>
  );
};

export default Header;

import React from "react";
import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";
import { Wrapper, Logo, List, Li, SearchIcon } from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Breaking Bad Logo" />
        </Link>
      </Logo>
      <List>
        <Li end="true" to="/">
          Home
        </Li>
        <Li to="/characters">Characters</Li>
        <Li to="/seasons">Seasons</Li>
        <Li to="/episodes">Episodes</Li>
      </List>
      <SearchIcon>
        <img src={searchIcon} alt="" />
      </SearchIcon>
    </Wrapper>
  );
};

export default Navbar;
import React from "react";
import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";
import { Wrapper, Logo, List, Li, SearchIcon } from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <Link to="/breaking-bad-api">
          <img src={logo} alt="Breaking Bad Logo" />
        </Link>
      </Logo>
      <List>
        <Li to="/breaking-bad-api">Home</Li>
        <Li to="/breaking-bad-api/characters">Characters</Li>
        <Li to="/breaking-bad-api/episodes">Episodes</Li>
      </List>
      <SearchIcon>
        <img src={searchIcon} alt="" />
      </SearchIcon>
    </Wrapper>
  );
};

export default Navbar;

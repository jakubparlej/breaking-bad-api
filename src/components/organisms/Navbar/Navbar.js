import React from "react";
import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";
import { Wrapper, Logo, List, SearchIcon } from "./Navbar.styles";
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
        <Link end="true" to="/">
          Home
        </Link>
        <Link to="/characters">Characters</Link>
        <li>Seasons</li>
        <li>Episodes</li>
      </List>
      <SearchIcon>
        <img src={searchIcon} alt="" />
      </SearchIcon>
    </Wrapper>
  );
};

export default Navbar;

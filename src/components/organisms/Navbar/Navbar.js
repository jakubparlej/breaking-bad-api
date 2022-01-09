import React from "react";
import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";
import { Wrapper, Logo, List, SearchIcon } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="Breaking Bad Logo" />
      </Logo>
      <List>
        <li>Characters</li>
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

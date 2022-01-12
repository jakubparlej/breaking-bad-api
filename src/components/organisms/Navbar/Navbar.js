import React, { useContext } from "react";
import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/icons/search-icon.svg";
import {
  Wrapper,
  Logo,
  List,
  Li,
  SearchIcon,
  Menu,
  MenuItem,
  Close,
  Open,
} from "./Navbar.styles";
import { Link } from "react-router-dom";
import { DataContext } from "../../providers/DataProvider";

const Navbar = () => {
  const { isMenuActive, setIsMenuActive } = useContext(DataContext);

  return (
    <Wrapper>
      <Logo>
        <Link to="/breaking-bad-api">
          <img src={logo} alt="Breaking Bad Logo" />
        </Link>
      </Logo>
      {isMenuActive ? (
        <Menu>
          <MenuItem
            onClick={() => setIsMenuActive(false)}
            to="/breaking-bad-api"
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => setIsMenuActive(false)}
            to="/breaking-bad-api/characters"
          >
            Characters
          </MenuItem>
          <MenuItem
            onClick={() => setIsMenuActive(false)}
            to="/breaking-bad-api/episodes"
          >
            Episodes
          </MenuItem>
        </Menu>
      ) : (
        <List>
          <Li to="/breaking-bad-api">Home</Li>
          <Li to="/breaking-bad-api/characters">Characters</Li>
          <Li to="/breaking-bad-api/episodes">Episodes</Li>
        </List>
      )}

      {/* <SearchIcon>
        <img src={searchIcon} alt="" />
      </SearchIcon> */}

      {isMenuActive ? (
        <Close onClick={() => setIsMenuActive(false)} />
      ) : (
        <Open onClick={() => setIsMenuActive(true)} />
      )}
    </Wrapper>
  );
};

export default Navbar;

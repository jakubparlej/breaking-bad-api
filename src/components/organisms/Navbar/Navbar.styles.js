import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";
import { Link } from "react-router-dom";

export const Wrapper = styled.nav`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.white};
`;

export const Logo = styled.div`
  object-fit: contain;
  width: 214px;

  img {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;

  ${theme.media.medium} {
    display: none;
  }
`;

export const Li = styled(Link)`
  font-size: 1.25rem;
  color: ${theme.color.white};
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.color.lightGreen};
  }
`;

export const SearchIcon = styled.button`
  width: 2rem;
  height: 2rem;
  background: ${theme.color.green};
  border-radius: 50%;
  border: none;
  display: grid;
  place-content: center;
  cursor: pointer;

  img {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

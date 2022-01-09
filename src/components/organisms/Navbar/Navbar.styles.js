import styled from "styled-components";
import { theme } from "../../../assets/styles/theme";

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

  li {
    font-size: 1.25rem;
    cursor: pointer;
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

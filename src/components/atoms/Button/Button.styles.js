import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../assets/styles/theme";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${theme.color.white};

  div {
    font-size: 1.25rem;
    margin-right: 4px;
  }
`;

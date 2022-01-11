import React from "react";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import { StyledLink } from "./Button.styles";

const Button = ({ title, link }) => {
  return (
    <StyledLink to={link}>
      <div>{title}</div>
      <img src={arrowRight} alt="" />
    </StyledLink>
  );
};

export default Button;

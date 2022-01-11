import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>&copy; 2022 Jakub Parlej. All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;

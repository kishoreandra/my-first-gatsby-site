import React from "react";
import { Wrapper, List, ListItems, StyledLink } from "./Navbar.style";

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Kishore Andra</StyledLink>
      <List>
        <ListItems>
          <StyledLink to="/about">About Me</StyledLink>
        </ListItems>
        <ListItems>
          <StyledLink to="/projects">Projects</StyledLink>
        </ListItems>
        <ListItems>
          <StyledLink to="/about">Contact</StyledLink>
        </ListItems>
      </List>
    </Wrapper>
  );
};

export default Navbar;

'use client';

import { styled } from '@mui/material';

const StyledNav = styled('nav')`
  display: flex;
  background-color: #333f49;
  text-transform: uppercase;
  margin: 0 auto;
`;

const StyledUl = styled('ul')`
  display: flex;
  list-style: none;
  justify-content: flex-start;
`;

const StyledLi = styled('li')`
  font-weight: 700;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>sample1</StyledLi>
        <StyledLi>sample2</StyledLi>
        <StyledLi>sample3</StyledLi>
        <StyledLi>sample4</StyledLi>
        <StyledLi>sample5</StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
export default Nav;

'use client';

import { styled } from '@mui/material';

const StyledNav = styled('nav')`
  background-color: #333f49;
`;

const StyledUl = styled('ul')`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  min-height: 51px;
`;

const StyledLi = styled('li')`
  font-weight: 700;
  margin: auto;
  cursor: pointer;
  user-select: none;
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

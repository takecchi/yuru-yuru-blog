'use client';

import { styled } from '@mui/material';
import Link from 'next/link';

const StyledHeader = styled('header')`
  background: #fff;
  margin: 0;
  padding: 0;
  border: 0;
  width: 100%;
`;

const Container = styled('div')`
  margin: 0 auto;
  max-width: 1080px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SiteLogo = styled('h1')`
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  padding: 20px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledLink href={'/'}>
          <SiteLogo>ゆるゆるブログ。</SiteLogo>
        </StyledLink>
      </Container>
    </StyledHeader>
  );
};
export default Header;

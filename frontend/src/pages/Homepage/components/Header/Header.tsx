import React from 'react';
import { HeaderContainer, Logo, Title, Subtitle, Menu } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Title>No pain faculty</Title>
        <Subtitle>Deliver everything, painless, in one single place</Subtitle>
      </Logo>
      <Menu>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>Grades</li>
          <li>News</li>
          <li>Login</li>
          <li>Account</li>
        </ul>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;

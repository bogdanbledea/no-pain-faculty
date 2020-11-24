import React from 'react';
import { HeaderContainer, Logo, Title, Subtitle, Menu } from './Header.styled';
import {
  Link
} from "react-router-dom";
import { Context } from 'App';

const Header = () => {
  return (
    <Context.Consumer>
      {value => {
        const isLoggedIn = value.state.isLoggedIn;
        return(
          <HeaderContainer>
          <Logo>
            <Title>No pain faculty</Title>
            <Subtitle>Deliver everything, painless, in one single place. Test frontend.</Subtitle>
          </Logo>
          <Menu>
            <ul>
              <li><Link to="/">Home</Link></li>
              {isLoggedIn && <li><Link to="/courses">Courses</Link></li>}
              {isLoggedIn && <li><Link to="grades">Grades</Link></li>}
              {isLoggedIn && <li><Link to="/news">News</Link></li>}
              {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
              {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
              {isLoggedIn && <li><Link to="/profile">Account</Link></li>}
            </ul>
          </Menu>
        </HeaderContainer>
        );
      }}

    </Context.Consumer>
    
  );
}

export default Header;

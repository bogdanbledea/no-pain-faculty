import React from 'react';
import authService from '../../services/auth.service';
import Button from '../../commons/components/Button/Button';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Container } from './Profile.styled';
import { Context } from 'App';

const Profile = () => {
  return(
    <Context.Consumer>
      {value => {
        const logout = () => {
          localStorage.removeItem('user');
          return value.setState({isLoggedIn: false});
        }
        if(!value.state.isLoggedIn){
          return <Redirect to='/login' />
        }
        return(
        <Container>
          Profile page
          <div>id: {value.state.userId}</div>
          <div>email: {value.state.email}</div>
          <Button buttonType="info" onClick={() => logout()}>Log out</Button>
        </Container>
        );
      }}
    </Context.Consumer>
  );
}

export default Profile;
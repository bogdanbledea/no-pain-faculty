import React from 'react';
import TextInput from 'commons/components/TextInput/TextInput';
import Button from 'commons/components/Button/Button';
import { Container } from './Login.styled';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';
import authService from 'services/auth.service';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [currentUser] = React.useState(authService.getCurrentUser());
  const {handleSubmit, register } = useForm();
  const history = useHistory()

  const onSubmit = (data:any) => {
    const { username, password } = data;
    authService.login(username, password).then(
      (data) => {
        history.push('/profile');
      })
  }

  return(
    <Container>
      {currentUser && currentUser.accessToken && <Redirect to="/profile" />}
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput inputRef={register} type="text" name="username" placeholder="username..." />
        <TextInput inputRef={register} type="password" name="password" placeholder="password..." />
        <p>Don't have an account yet? <Link to="/register">Register here</Link></p>
        <Button type="submit" buttonType="info">Login</Button>
      </form>
    </Container>
  );
}

export default Login;
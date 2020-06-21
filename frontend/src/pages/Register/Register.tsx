import React from 'react';
import TextInput from '../../commons/components/TextInput/TextInput';
import Button from '../../commons/components/Button/Button';
import { Container } from './Register.styled';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';
import Checkbox from '../../commons/components/Checkbox/Checkbox';


const Register = () => {
  const [currentUser] = React.useState(authService.getCurrentUser());
  const {handleSubmit, register } = useForm();
  const history = useHistory()

  const onSubmit = (data:any) => {
    const { username, email, password } = data;
    authService.register(username, email, password).then(
      (data) => {
        history.push('/login');
      })
  }

  return(
    <Container>
      {currentUser && currentUser.accessToken && <Redirect to="/profile" />}
      <h3>Register</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput inputRef={register} type="text" name="username" placeholder="username..." />
        <TextInput inputRef={register} type="text" name="email" placeholder="email..." />
        <TextInput inputRef={register} type="password" name="password" placeholder="password..." />
        <p>Already have an account? <Link to="/login">Login here</Link></p>
          <Checkbox name="acceptTerms" inputRef={register} label="I accept the terms and conditions of using this app" />
        <Button type="submit" buttonType="info">Register</Button>
      </form>
    </Container>
  );
}

export default Register;
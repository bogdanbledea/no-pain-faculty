import React from 'react';
import TextInput from '../../commons/components/TextInput/TextInput';
import Button from '../../commons/components/Button/Button';
import { Container } from './Login.styled';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';
import { useLoginMutation } from 'generated/graphql';
import { Context } from 'App';

const Login = () => {
  const [currentUser] = React.useState(authService.getCurrentUser());
  const {handleSubmit, register } = useForm();
  const history = useHistory();
  const [login] = useLoginMutation();

  return(
    <Context.Consumer>
      {value => {
          const onSubmit = async (data:any) => {
            const { email, pass } = data;
            try{
              const response = await login({
                variables:{
                  email,
                  pass: pass
                }
              });
              if(response && response.data){
                try{
                  localStorage.setItem('user', response.data.login.accessToken);
                  value.setState({isLoggedIn: true});
                  history.push('/');
                } catch(err){
                  console.error(err);
                }
              }
            } catch(err){
              console.error(err);
            }
          }

        return(
        <Container>
          {currentUser && <Redirect to="/profile" />}
          <h3>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput inputRef={register({required: 'Email is required'})} type="text" name="email" placeholder="Email..." />
            <TextInput inputRef={register({required: 'Password is required'})} type="password" name="pass" placeholder="password..." />
            <p>Don't have an account yet? <Link to="/register">Register here</Link></p>
            <Button type="submit" buttonType="info">Login</Button>
          </form>
        </Container>
      )}}
    </Context.Consumer>
    
  );
}

export default Login;
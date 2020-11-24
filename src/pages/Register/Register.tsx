import React from 'react';
import TextInput from '../../commons/components/TextInput/TextInput';
import Button from '../../commons/components/Button/Button';
import { Container } from './Register.styled';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';
import Checkbox from '../../commons/components/Checkbox/Checkbox';
import { useRegisterMutation } from 'generated/graphql';


const Register = () => {
  const [currentUser] = React.useState(authService.getCurrentUser());
  const {handleSubmit, register, errors, watch } = useForm();
  const history = useHistory()
  const [registerFn] = useRegisterMutation();

  const onSubmit = async (data:any) => {
    const { username, email, pass } = data;
    const response = await registerFn({
      variables:{
        email,
        password:pass
      }
    });
  }

  return(
    <Container>
      {/* {currentUser && currentUser.accessToken && <Redirect to="/profile" />} */}
      <h3>Register</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput inputRef={register({required: 'Username is required'})} error={errors.username} message={errors.username && errors.username.message} type="text" name="username" placeholder="Username..." />
        <TextInput inputRef={register({required: 'Email is required'})} type="email" error={errors.email} message={errors.email && errors.email.message} name="email" placeholder="Email..." />
        <TextInput inputRef={register({required: 'Password is required'})} type="password" error={errors.pass} message={errors.pass && errors.pass.message} name="pass" placeholder="Password..." />
        <TextInput
          inputRef={register({required: 'Retyping the password is required', 
          validate: (value) => {
            if(value === watch('pass')){
              return true;
            } else{
              return 'Passwords must be the same!';
            }
          }})}
          type="password"
          error={errors.repass}
          message={errors.repass && errors.repass.message}
          name="repass"
          placeholder="Type the password again..."
        />
        <p>Already have an account? <Link to="/login">Login here</Link></p>
          <Checkbox name="acceptTerms" inputRef={register({required: true})} label="I accept the terms and conditions of using this app" />
          {errors.acceptTerms && <div>you must accept terms and conditions</div>}
        <Button type="submit" buttonType="info">Register</Button>
      </form>
    </Container>
  );
}

export default Register;
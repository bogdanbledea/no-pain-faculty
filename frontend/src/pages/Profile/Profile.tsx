import React from 'react';
import authService from 'services/auth.service';
import Button from 'commons/components/Button/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Container } from './Profile.styled';

const Profile = () => {
  const history = useHistory()
  const [currentUser] = React.useState(authService.getCurrentUser());

  if(currentUser.accessToken){
     return(
       <Container>
            <Button buttonType="info" onClick={async () => { 
              await authService.logout();
              history.push('/login');
            }}>Log out</Button>
            <header className="jumbotron">
              <h3>
                <strong>Hi, {currentUser.username}!</strong>
              </h3>
            </header>
            <p>Here are some of your informations:</p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role:string, index:number) => <li key={index}>{role}</li>)}
            </ul>
       </Container>
    
  );
} else {
  return (
    <div>you must be logged in to see your page. go to <Link to="/login">login page</Link></div>
  )
}
}

export default Profile;
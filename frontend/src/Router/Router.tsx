import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import Login from 'pages/Login/Login'
import Header from 'pages/Homepage/components/Header/Header';
import Profile from 'pages/Profile/Profile';
import Courses from 'pages/Courses/Courses';
import authService from 'services/auth.service';
import Register from 'pages/Register/Register';
import Grades from 'pages/Grades/Grades';
import News from 'pages/News/News';

const Router = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/courses" component={Courses} />
          <PrivateRoute exact path="/grades" component={Grades} />
          <PrivateRoute exact path="/news" component={News} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

const PrivateRoute = (props:RouteProps) => {
  const [currentUser] = React.useState(authService.getCurrentUser());
  const { path, exact, component } = props;
  if(currentUser && currentUser.accessToken){
    return (
    <Route path={path} exact={exact} component={component} />
  );
  } else{
    return (
      <Redirect to="/login" />
    );
  }
}

export default Router;

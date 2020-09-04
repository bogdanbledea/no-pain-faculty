import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  Redirect
} from 'react-router-dom'
import Homepage from '../pages/Homepage/Homepage'
import Login from '../pages/Login/Login'
import Header from '../pages/Homepage/components/Header/Header';
import Profile from '../pages/Profile/Profile';
import Courses from '../pages/Courses/Courses';
import authService from '../services/auth.service';
import Register from '../pages/Register/Register';
import Grades from '../pages/Grades/Grades';
import News from '../pages/News/News';
import { Context } from 'App';

const Router = () => {
  return (
    <Context.Consumer>
      {value => {
        const isLoggedIn = value.state.isLoggedIn;

        const PrivateRoute = (props:RouteProps) => {
          const { path, exact, component } = props;
          if(isLoggedIn){
            return (
            <Route path={path} exact={exact} component={component} />
          );
          }
          else{
            return (
              // <Redirect to="/login" />
              <Route path={path} exact={exact} component={component} />
            );
          }
        }
        
        return(
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
        );
      }}
      
      </Context.Consumer>
  );
}

export default Router;

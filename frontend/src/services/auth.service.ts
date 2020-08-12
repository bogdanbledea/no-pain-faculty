import axios from "axios";
import jwt_decode from 'jwt-decode';
import React from 'react';

const API_URL = "http://localhost:4000/api/auth/";

class AuthService {
  login(username:string, password:string) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username:string, email:string, password:string) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const token = localStorage.getItem('user');

    console.log(token);
    if(token){
      try{
        const decoded:any = jwt_decode(token!);
        console.log(decoded);
        return {
          currentUser: decoded.userId
        }
      } catch(err){
        console.log(err.message);
      }
    }
  }
}

export default new AuthService();
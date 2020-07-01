import axios from "axios";
import jwt_decode from 'jwt-decode';

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
    console.log(localStorage.getItem('user'));
    if(localStorage.getItem('user') !== null){
      const decoded_token:any = jwt_decode(JSON.parse(localStorage.getItem('user') || '{}').accessToken);
      console.log(decoded_token)
      if (decoded_token.exp < Date.now() / 1000) {
        localStorage.clear();
      } else {
        return JSON.parse(localStorage.getItem('user') || '{}');
      }
    } else {
      return undefined;
    }
  }
}

export default new AuthService();
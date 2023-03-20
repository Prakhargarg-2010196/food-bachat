import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class AuthService {

    SignUp(userCredentials) {
        return axios.post((BaseUrl()+"api/auth/signup"), userCredentials)
    }

    LogIn(userCredentials) {
        return axios
            .post((BaseUrl()+"api/auth/signin"), userCredentials)
    }

 
    
    isAuthenticated() {
        return JSON.parse(localStorage.getItem('isAuthenticatedLogin'));
    }
    
    logOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("isAuthenticatedLogin");
    }

    
   

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();


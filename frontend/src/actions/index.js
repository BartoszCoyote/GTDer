import axios from 'axios';


export function signinUser({login,password}){
    return function(dispatch){

        axios.post('http://localhost:8080/auth', { login, password});
        console.log(chuj);

    };

}
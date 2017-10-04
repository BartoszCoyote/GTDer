import axios from 'axios';


export function signinUser({username,password}){
    return function(dispatch){

        axios.post('http://localhost:8383/auth', { username, password});

    };

}
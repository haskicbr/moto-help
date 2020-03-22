import {RegistrationsActionTypes} from "./types";
import axios from "axios";


const actions = {};

actions[RegistrationsActionTypes.REGISTRATION] = function ({commit, state}, data) {

    let {email, password} = data;

    return axios.post('http://localhost:8001/api/registration', {
        email: email,
        password: password
    })
};

export default actions;

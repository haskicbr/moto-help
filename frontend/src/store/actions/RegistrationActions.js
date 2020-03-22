import {RegistrationsActionTypes} from "./types";
import axios from "axios";
import Urls from "../../services/api/Urls";

const actions = {};

actions[RegistrationsActionTypes.REGISTRATION] = function ({commit, state}, data) {

    let {email, password} = data;

    return axios.post(Urls.POST_REGISTRATION, {
        email: email,
        password: password
    })
};

export default actions;

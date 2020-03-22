import {AuthActionTypes} from "./types";
import axios from "axios";
import router from "../../routes";
import Urls from "../../services/api/Urls";

import {SystemMutationTypes} from "../mutations/types";

const actions = {};

actions[AuthActionTypes.AUTH] = function ({commit, state}, data) {

    commit(SystemMutationTypes.LOGIN, {
        isLogged: true,
        isRegisterUser: true
    });

    router.push('/');
};

actions[AuthActionTypes.LOGOUT] = function ({commit, state}, data) {
    localStorage.removeItem('store');
    commit(SystemMutationTypes.INITIAL_STORE);

    router.push('/login');
};

actions[AuthActionTypes.AUTH_WITHOUT_REGISTRATION] = function ({commit, state}, data) {

    commit(SystemMutationTypes.LOGIN, {
        isLogged: true,
        isRegisterUser: false
    });

    router.push('/');
};

actions[AuthActionTypes.RATE] = function ({commit, state}, rateValue) {
    return axios.post(Urls.POST_RATE, {
        rate : rateValue
    });
};



export default actions;

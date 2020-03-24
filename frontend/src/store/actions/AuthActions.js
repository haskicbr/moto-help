import {AuthActionTypes, RegistrationsActionTypes} from "./types";
import router from "../../routes";
import Urls   from "../../services/api/Urls";
import axios  from "../../services/api/ApiRequest";

import {SystemMutationTypes} from "../mutations/types";

const actions = {};

actions[AuthActionTypes.ADD_TOKEN] = function({commit, state}, tokenValue) {
    axios.setToken(tokenValue);
};
actions[AuthActionTypes.REMOVE_TOKEN] = function({commit, state}, tokenValue) {
    axios.removeToken();
};

actions[AuthActionTypes.AUTH] = function ({commit, state, dispatch}, data) {

    let {email, password} = data;

    return axios.post(Urls.POST_AUTH, {
        email: email,
        password: password
    }).then(response => {

        dispatch(AuthActionTypes.ADD_TOKEN, response.data.token);
        commit(SystemMutationTypes.UPDATE_STORE, JSON.parse(response.data.store));

        router.push('/');
    });
};

actions[AuthActionTypes.LOGOUT] = function ({commit, dispatch, state}, data) {

    dispatch(AuthActionTypes.REMOVE_TOKEN);


    debugger;

    commit(SystemMutationTypes.INITIAL_STORE, {needToResetStore: true});

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

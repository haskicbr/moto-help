import {AuthActionTypes} from "./types";
import axios from "axios";
import router from "../../routes";

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

    commit(SystemMutationTypes.LOGIN, {
        isLogged: false,
        isRegisterUser: false
    });

    router.push('/login');
};

actions[AuthActionTypes.AUTH_WITHOUT_REGISTRATION] = function ({commit, state}, data) {

    commit(SystemMutationTypes.LOGIN, {
        isLogged: true,
        isRegisterUser: false
    });

    router.push('/');
};

export default actions;

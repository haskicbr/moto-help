import {AuthActionTypes, RegistrationsActionTypes} from "./types";
import axios from "../../services/api/ApiRequest";
import Urls from "../../services/api/Urls";
import {SystemMutationTypes} from "../mutations/types";
import router from "../../routes";

const actions = {};

actions[RegistrationsActionTypes.REGISTRATION] = function ({commit, state, dispatch}, data) {

    let {email, password} = data;

    return axios.post(Urls.POST_REGISTRATION, {
        email: email,
        password: password
    }).then((response) => {

        let data = response.data;

        dispatch(AuthActionTypes.ADD_TOKEN, data.token);

        commit(SystemMutationTypes.UPDATE_STORE, JSON.parse(data.store));

        router.push('/');
    })
};

export default actions;

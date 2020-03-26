import axios from "../../services/api/ApiRequest";
import Urls from "../../services/api/Urls";
import {SystemActionTypes} from "./types";

const systemActions = {};

systemActions[SystemActionTypes.SYNC_STORE_WITH_SERVER] = ({commit, state, dispatch}, data) => {

    return new Promise((resolve, reject) => {

        if (state.isRegisterUser) {
            resolve(axios.post(Urls.POST_UPDATE_STORE, {
                store: state
            }));
        } else {
            resolve({

            })
        }
    })
};

export default systemActions;
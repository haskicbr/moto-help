import {SystemMutationTypes} from "./types";
import { v4 as uuidv4 } from 'uuid';
const mutations = {};

const initialState = {
    "currentTransportId": null,
    "transports": [],
    "services": [],
    "isLogged": false,
    "isRegisterUser": false,
    "nightMode": true,
    "serviceTypes": {
        "CHANGE_OIL": {"description": "Change oil"},
        "CHANGE_OIL_FILTER": {"description": "Change oil filter"},
        "CHANGE_FUEL_FILTER": {"description": "Change fuel filter"},
        "CHANGE_AIR_FILTER": {"description": "Change air filter"},
        "CHANGE_SPARK_PLUGS": {"description": "Change spark plugs"}
    },
    "defaultServiceType": "CHANGE_OIL"
};

mutations[SystemMutationTypes.UPDATE_STORE] = function(state, newStore) {
    this.replaceState({...newStore});
};

mutations[SystemMutationTypes.INITIAL_STORE] = function (state, data) {

    let currentState;

    let needResetStore = false;

    if (typeof (data) !== 'undefined') {
        needResetStore = data.needToResetStore ? data.needToResetStore : false;
    }

    if (needResetStore) {
        currentState = initialState;
    } else {
        currentState = JSON.parse(localStorage.getItem('store'));
    }

    // Replace the state object with the stored item
    this.replaceState(
        {...state, ...currentState}
    );
};

mutations[SystemMutationTypes.CHANGE_NIGHT_MODE] = function (state, isActive) {
    state.nightMode = isActive;
};

mutations[SystemMutationTypes.LOGIN] = function (state, {isLogged, isRegisterUser}) {
    state.isLogged = isLogged;
    state.isRegisterUser = isRegisterUser;
};

export default mutations;

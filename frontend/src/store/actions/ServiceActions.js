import {ServiceActionTypes} from "./types";
import {ServiceMutationTypes} from "../mutations/types"
import SystemActionTypes from "./types/SystemActionTypes";

const actions = {};

actions[ServiceActionTypes.ADD_MILEAGE] = function ({commit, state, dispatch}, service) {

    commit(ServiceMutationTypes.ADD_MILEAGE, service);

    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);

};

actions[ServiceActionTypes.DELETE_MILEAGE] = function ({commit, state, dispatch}, index) {

    commit(ServiceMutationTypes.DELETE_MILEAGE, index);

    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);

};

actions[ServiceActionTypes.CHANGE_CURRENT] = function ({commit, state, dispatch}, newValue) {

    commit(ServiceMutationTypes.ADD_HISTORY,    newValue);
    commit(ServiceMutationTypes.CHANGE_CURRENT, newValue);

    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);
};


actions[ServiceActionTypes.ADD_TYPE] = function ({commit, state, dispatch}, {type, description}) {

    commit(ServiceMutationTypes.ADD_TYPE, {
        type, description
    });

    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);
};

actions[ServiceActionTypes.DELETE_TYPE] = function ({commit, state, dispatch}, type) {

    commit(ServiceMutationTypes.DELETE_TYPE, type);

    dispatch(SystemActionTypes.SYNC_STORE_WITH_SERVER);
};

export default actions;

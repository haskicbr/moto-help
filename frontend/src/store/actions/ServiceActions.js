import {ServiceActionTypes} from "./types";
import {ServiceMutationTypes} from "../mutations/types"


const actions = {};

actions[ServiceActionTypes.ADD_MILEAGE] = function ({commit, state}, service) {
    commit(ServiceMutationTypes.ADD_MILEAGE, service);
};

actions[ServiceActionTypes.DELETE_MILEAGE] = function ({commit, state}, index) {
    commit(ServiceMutationTypes.DELETE_MILEAGE, index);
};

actions[ServiceActionTypes.CHANGE_CURRENT] = function ({commit, state}, newValue) {

    commit(ServiceMutationTypes.ADD_HISTORY, newValue);
    commit(ServiceMutationTypes.CHANGE_CURRENT, newValue);
};


actions[ServiceActionTypes.ADD_TYPE] = function ({commit, state}, {type, description}) {
    commit(ServiceMutationTypes.ADD_TYPE, {
        type, description
    });
};

actions[ServiceActionTypes.DELETE_TYPE] = function ({commit, state}, type) {
    commit(ServiceMutationTypes.DELETE_TYPE, type);
};

export default actions;

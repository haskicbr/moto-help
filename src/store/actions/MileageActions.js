import {MileageActionTypes}   from "./types";
import {MileageMutationTypes} from "./../mutations/types"


const actions = {};

actions[MileageActionTypes.ADD_MILEAGE] = function ({ commit, state }, mileage) {
    commit(MileageMutationTypes.ADD_MILEAGE, mileage);
};

actions[MileageActionTypes.DELETE_MILEAGE] = function ({ commit, state }, index) {
    commit(MileageMutationTypes.DELETE_MILEAGE, index);
};

actions[MileageActionTypes.CHANGE_CURRENT] = function ({ commit, state }, newValue) {
    commit(MileageMutationTypes.CHANGE_CURRENT, newValue);
};

export default actions;

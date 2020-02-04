import {MileageActionTypes}   from "./types";
import {MileageMutationTypes} from "./../mutations/types"


const actions = {};

actions[MileageActionTypes.ADD_MILEAGE] = function ({ commit, state }, mileage) {
    commit(MileageMutationTypes.ADD_MILEAGE, mileage);
};

actions[MileageActionTypes.DELETE_MILEAGE] = function ({ commit, state }, index) {
    commit(MileageMutationTypes.DELETE_MILEAGE, index);
};

export default actions;

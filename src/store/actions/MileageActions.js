import {MileageActionTypes}   from "./types";
import {MileageMutationTypes} from "./../mutations/types"


const actions = {};

actions[MileageActionTypes.ADD_MILEAGE] = function ({ commit, state }, mileage) {
    commit(MileageMutationTypes.ADD_MILEAGE, mileage);
};

export default actions;

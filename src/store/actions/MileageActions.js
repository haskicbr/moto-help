import {MileageActionTypes} from "./types";
import {MileageMutationTypes} from "./../mutations/types"


const actions = {};

actions[MileageActionTypes.ADD_MILEAGE] = function ({commit, state}, mileage) {
    commit(MileageMutationTypes.ADD_MILEAGE, mileage);
};

actions[MileageActionTypes.DELETE_MILEAGE] = function ({commit, state}, index) {
    commit(MileageMutationTypes.DELETE_MILEAGE, index);
};

actions[MileageActionTypes.CHANGE_CURRENT] = function ({commit, state}, newValue) {
    commit(MileageMutationTypes.CHANGE_CURRENT, newValue);
};


actions[MileageActionTypes.ADD_TYPE] = function ({commit, state}, {type, description}) {
    commit(MileageMutationTypes.ADD_TYPE, {
        type, description
    });
};

actions[MileageActionTypes.DELETE_TYPE] = function ({commit, state}, type) {
    commit(MileageMutationTypes.DELETE_TYPE, type);
};

export default actions;

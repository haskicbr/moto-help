import {MileageMutationTypes} from "./types";

const mutations = {};

mutations[MileageMutationTypes.ADD_MILEAGE] = (state, payload) => {
    state.mileages.unshift(
        payload
    );
};

mutations[MileageMutationTypes.DELETE_MILEAGE] = (state, mileageIndex) => {
    state.mileages.splice(mileageIndex, 1);
};

mutations[MileageMutationTypes.CHANGE_CURRENT] = (state, value) => {
    state.currentMileage = value;
};



export default mutations;

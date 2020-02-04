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


export default mutations;

import {MileageMutationTypes} from "./types";

const mutations = {};

mutations[MileageMutationTypes.ADD_MILEAGE] = (state, payload) => {
    state.mileages.unshift(
        payload
    );
};

export default mutations;

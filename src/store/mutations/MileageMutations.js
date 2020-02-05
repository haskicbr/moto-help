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


mutations[MileageMutationTypes.ADD_TYPE] = (state, {type, description}) => {
    state.mileageTypes[type] = description;

    state.mileageTypes = {...state.mileageTypes}
};


mutations[MileageMutationTypes.DELETE_TYPE] = (state, type) => {
    delete state.mileageTypes[type];

    state.mileageTypes = {...state.mileageTypes}
};

export default mutations;

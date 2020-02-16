import {ServiceMutationTypes} from "./types";

const mutations = {};

mutations[ServiceMutationTypes.ADD_MILEAGE] = (state, payload) => {
    state.services.unshift(
        payload
    );
};

mutations[ServiceMutationTypes.DELETE_MILEAGE] = (state, serviceIndex) => {
    state.services.splice(serviceIndex, 1);
};

mutations[ServiceMutationTypes.CHANGE_CURRENT] = (state, value) => {
    state.currentMileage = value;
};


mutations[ServiceMutationTypes.ADD_TYPE] = (state, {type, description}) => {
    state.serviceTypes[type] = description;

    state.serviceTypes = {...state.serviceTypes}
};


mutations[ServiceMutationTypes.DELETE_TYPE] = (state, type) => {
    delete state.serviceTypes[type];

    state.serviceTypes = {...state.serviceTypes}
};

export default mutations;
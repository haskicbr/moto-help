import {ServiceMutationTypes} from "./types";

const mutations = {};

mutations[ServiceMutationTypes.ADD_SERVICE] = (state, payload) => {
    state.services.unshift(
        payload
    );
};

mutations[ServiceMutationTypes.DELETE_SERVICE] = (state, serviceIndex) => {
    state.services.splice(serviceIndex, 1);
};

mutations[ServiceMutationTypes.CHANGE_CURRENT_MILEAGE] = (state, {id, mileage}) => {
    const transportIndex = state.transports.findIndex(transport => transport.id === id);
    state.transports[transportIndex].mileage = mileage;
};


mutations[ServiceMutationTypes.ADD_TYPE] = (state, {type, description}) => {
    state.serviceTypes[type] = {description};
    state.serviceTypes = {...state.serviceTypes}
};


mutations[ServiceMutationTypes.DELETE_TYPE] = (state, type) => {
    delete state.serviceTypes[type];

    state.serviceTypes = {...state.serviceTypes}
};


mutations[ServiceMutationTypes.ADD_HISTORY] = (state, currentMileage) => {

    let date = new Date().toISOString().substr(0, 10);

    state.mileageHistory[date] = currentMileage;
    state.mileageHistory = {...state.mileageHistory};
};


export default mutations;

import {TransportMutationTypes} from "./types";

const TransportMutations = {};

TransportMutations[TransportMutationTypes.ADD_TRANSPORT] = function (state, {id, name, mileage}) {
    state.transports.push({
        id, name, mileage
    });
};

TransportMutations[TransportMutationTypes.DELETE_TRANSPORT] = function (state, {id}) {
    const transportIndex = state.transports.findIndex(transport => transport.id === id);
    state.transports.splice(transportIndex, 1)
};

TransportMutations[TransportMutationTypes.CHANGE_CURRENT_TRANSPORT] = function (state, {id}) {
    state.currentTransportId = id;
}
TransportMutations[TransportMutationTypes.CHANGE_MILEAGE] = function (state, {id, mileage}) {
    const transportId = state.transports.findIndex(transport => transport.id === id);
    state.transports[transportId].mileage = mileage;
}


export default TransportMutations;

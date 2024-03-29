import language from "./language";

const getters = {
    defaultServiceType(state) {

        let defaultServiceType = state.defaultServiceType;

        if (typeof (state.serviceTypes[defaultServiceType]) !== 'undefined') {
            return defaultServiceType;
        }

        if (Object.keys(state.serviceTypes).length > 0) {
            return Object.keys(state.serviceTypes)[0];
        }

        return null;
    },
    currentTransport(state) {
        if (state.transports.length === 0) {
            return null;
        }
        return state.transports.find(transport => transport.id === state.currentTransportId);
    },
    currentMileage(state, getters) {
        const currentTransport = getters.currentTransport;
        return (currentTransport) ? Number(currentTransport.mileage) : null;
    },
    currentServices(state, getters) {
        return state.services.filter(service => service.transportId === getters.currentTransport.id)
    },
    ...language
}


export default getters;
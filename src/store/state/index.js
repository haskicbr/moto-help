const state = {
    services: [],
    currentMileage: 0,
    isLogged: false
};


let serviceTypes = {
    CHANGE_OIL: "CHANGE_OIL",
    CHANGE_OIL_FILTER: "CHANGE_OIL_FILTER",
    CHANGE_FUEL_FILTER: "CHANGE_FUEL_FILTER",
    CHANGE_AIR_FILTER: "CHANGE_AIR_FILTER"
};

let serviceTypesDescriptions = {};

serviceTypesDescriptions[serviceTypes.CHANGE_OIL] = {
    description: "Замена масла"
};
serviceTypesDescriptions[serviceTypes.CHANGE_OIL_FILTER] = {
    description: "Замена маслянного фильтра"
};
serviceTypesDescriptions[serviceTypes.CHANGE_FUEL_FILTER] = {
    description: "Замена топливного фильтра"
};
serviceTypesDescriptions[serviceTypes.CHANGE_AIR_FILTER] = {
    description: "Замена воздушного фильтра"
};

state.serviceTypes = serviceTypesDescriptions;
state.defaultServiceType = serviceTypes.CHANGE_OIL;

export default state;
